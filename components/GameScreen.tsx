
import React, { useState, useEffect, useCallback } from 'react';
import { PhonicsItem, LevelMetadata } from '../types';
import { PHONICS_DATA } from '../constants';
import { generatePhonicsStory } from '../services/geminiService';

interface GameScreenProps {
  level: LevelMetadata;
  onBack: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ level, onBack }) => {
  const [index, setIndex] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [aiStory, setAiStory] = useState<string | null>(null);
  const [isGeneratingStory, setIsGeneratingStory] = useState(false);
  
  const currentList = PHONICS_DATA[level.id] || [];
  const currentItem = currentList[index];
  const isTricky = level.id.includes('trick');

  const speak = useCallback((text: string, repeat: boolean = false) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    if (repeat) {
      let count = 0;
      const speakLoop = () => {
        if (count < 2) {
          const u = new SpeechSynthesisUtterance(text);
          u.rate = 0.9; u.pitch = 1.1;
          u.onend = () => { count++; setTimeout(speakLoop, 800); };
          window.speechSynthesis.speak(u);
        }
      };
      speakLoop();
    } else {
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleCheck = () => {
    setShowReward(true);
    speak(currentItem.audio, true);
  };

  const handleNext = () => {
    if (index + 1 < currentList.length) {
      setIndex(prev => prev + 1);
      setShowReward(false);
      setAiStory(null);
    } else {
      alert("🎉 AWESOME! Level Complete!");
      onBack();
    }
  };

  const handleAiHelp = async () => {
    if (isGeneratingStory) return;
    setIsGeneratingStory(true);
    const story = await generatePhonicsStory(currentItem.t.replace(/<\/?[^>]+(>|$)/g, ""), currentItem.ex.split(',')[0]);
    setAiStory(story);
    setIsGeneratingStory(false);
    speak(story);
  };

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  if (!currentItem) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex justify-between items-center text-xs font-bold text-gray-400 mb-4">
        <span className="bg-sky-50 px-2 py-1 rounded-lg">{isTricky ? 'MEMORY MODE' : 'DECODING MODE'}</span>
        <span className="bg-sky-50 px-2 py-1 rounded-lg">{index + 1} / {currentList.length}</span>
      </div>

      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex justify-between items-center mb-6">
        <div>
          <span className="block text-[10px] font-black text-amber-600 uppercase tracking-wider">
            {isTricky ? 'Memorize This:' : 'Make This Sound:'}
          </span>
          <span className="text-xl font-bold text-amber-800">{currentItem.g}</span>
        </div>
        <button 
          onClick={() => speak(currentItem.audio)}
          className="w-12 h-12 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center text-xl transition-colors border-2 border-amber-400"
        >
          🔊
        </button>
      </div>

      {isTricky && (
        <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full w-max mx-auto mb-2 animate-pulse">
          ⚠️ TRICKY WORD: DON'T DECODE!
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
        <div 
          className={`text-7xl md:text-9xl font-black transition-all duration-300 ${isTricky ? 'text-orange-600' : 'text-slate-800'}`}
          dangerouslySetInnerHTML={{ __html: currentItem.t }}
        />
        
        <div className="text-xl text-slate-500 italic">
          {currentItem.ex}
        </div>

        {showReward && (
          <div className="text-8xl animate-bounce-in py-4">
            {currentItem.r}
          </div>
        )}

        {aiStory && (
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-purple-800 animate-bounce-in max-w-sm">
             <span className="block text-[10px] font-black text-purple-400 mb-1 uppercase tracking-wider">AI Fun Story:</span>
             <p className="text-base font-medium leading-relaxed">{aiStory}</p>
          </div>
        )}
      </div>

      <div className="mt-auto space-y-3">
        {!showReward ? (
          <>
            <button
              onClick={handleCheck}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-5 rounded-3xl shadow-[0_6px_0_0_#15803d] active:shadow-none active:translate-y-[6px] transition-all"
            >
              Check! ✨
            </button>
            <button
              onClick={handleAiHelp}
              disabled={isGeneratingStory}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold py-3 rounded-2xl shadow-[0_4px_0_0_#7e22ce] active:shadow-none active:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGeneratingStory ? (
                <>
                   <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                   AI Thinking...
                </>
              ) : (
                <>🪄 AI Story Helper</>
              )}
            </button>
          </>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white text-2xl font-bold py-5 rounded-3xl shadow-[0_6px_0_0_#0369a1] active:shadow-none active:translate-y-[6px] transition-all"
          >
            Next ➡️
          </button>
        )}
        
        <button 
          onClick={onBack}
          className="w-full text-slate-400 text-sm font-bold hover:text-sky-600 transition-colors py-2"
        >
          ← Back to Library
        </button>
      </div>
    </div>
  );
};

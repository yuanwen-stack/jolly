
import React from 'react';
import { LEVELS } from '../constants';
import { LevelMetadata } from '../types';

interface MenuScreenProps {
  onSelectLevel: (level: LevelMetadata) => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({ onSelectLevel }) => {
  const categories = Array.from(new Set(LEVELS.map(l => l.category)));

  return (
    <div className="animate-fade-in flex flex-col h-full">
      <h1 className="text-3xl font-bold text-sky-800 text-center mb-6 flex items-center justify-center gap-2">
        <span className="text-4xl">📚</span> Phonics Library
      </h1>

      <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-sky-300">
        {categories.map(category => (
          <div key={category} className="space-y-2">
            <h2 className="text-sm font-bold text-sky-600 border-b-2 border-sky-100 uppercase tracking-wider sticky top-0 bg-white py-1">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {LEVELS.filter(l => l.category === category).map(level => (
                <button
                  key={level.id}
                  onClick={() => onSelectLevel(level)}
                  className={`w-full text-left p-4 rounded-2xl font-semibold text-white shadow-md active:scale-95 transition-transform ${level.color || 'bg-cyan-500'} hover:brightness-110 flex justify-between items-center group`}
                >
                  <span>{level.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">📖</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

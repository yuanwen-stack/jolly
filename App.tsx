
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { MenuScreen } from './components/MenuScreen';
import { GameScreen } from './components/GameScreen';
import { ScreenState, LevelMetadata } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('MENU');
  const [currentLevel, setCurrentLevel] = useState<LevelMetadata | null>(null);

  const handleSelectLevel = (level: LevelMetadata) => {
    setCurrentLevel(level);
    setScreen('GAME');
  };

  const handleBackToMenu = () => {
    setScreen('MENU');
    setCurrentLevel(null);
  };

  return (
    <Layout>
      {screen === 'MENU' ? (
        <MenuScreen onSelectLevel={handleSelectLevel} />
      ) : (
        currentLevel && <GameScreen level={currentLevel} onBack={handleBackToMenu} />
      )}
    </Layout>
  );
};

export default App;

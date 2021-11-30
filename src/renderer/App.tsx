import React, { VFC } from 'react';
import { quitApp } from './entries/app.entry';

const App: VFC = () => {
  const handleQuitApp = () => {
    quitApp();
  };

  return (
    <div>
      <p>Hello ElectronJS</p>
      <button onClick={handleQuitApp}>Quit App</button>
    </div>
  );
};

export default App;

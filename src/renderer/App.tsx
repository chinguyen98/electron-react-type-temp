import React, { useState, VFC } from 'react';

const App: VFC = () => {
  const [inputVal, setInputVal] = useState<string>('');

  const handleQuitApp = () => {
    window.appApi.quitApp();
  };

  const handlePrintToMainProcess = () => {
    window.appApi.writeSomeThing(inputVal);
  };

  return (
    <div>
      <p>Hello ElectronJS</p>
      <button onClick={handleQuitApp}>Quit App</button>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="Write something here!"
      ></input>
      <button onClick={handlePrintToMainProcess}>Print something to main process!</button>
    </div>
  );
};

export default App;

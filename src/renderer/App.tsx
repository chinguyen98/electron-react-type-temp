import React, { useState, VFC } from 'react';

const App: VFC = () => {
  const [inputVal, setInputVal] = useState<string>('');

  const handleQuitApp = () => {
    window.apiApp.quitApp();
  };

  const handlePrintToMainProcess = () => {
    window.apiApp.writeSomeThing(inputVal);
  };

  const handleGetAsyncRandomNumber = async () => {
    const number = await window.apiApp.asyncGetRandom();
    alert(number);
  };

  const showVersion = async () => {
    const version = await window.apiApp.getAppVersion();
    console.log({ version });
  };

  return (
    <div>
      <p>Hello ElectronJS</p>
      <button onClick={handleQuitApp}>Quit App</button>
      <button onClick={handleGetAsyncRandomNumber}>Get Random Number</button>
      <button onClick={showVersion}>Show version</button>
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

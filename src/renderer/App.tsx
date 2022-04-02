import React from 'react';

const App: React.FC = () => {
  const { node, chrome, electron } = window.bridge?.versions || {};

  return (
    <>
      <h1>Hello World!</h1>
      <p>
        We are using Node.js <span id="node-version">{node}</span>,
        Chromium <span id="chrome-version">{chrome}</span>,
        and Electron <span id="electron-version">{electron}</span>.
      </p>
    </>
  );
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hypotheticalHTML = '';
  const s = DOMPurify.sanitize(hypotheticalHTML); // Does not provide import suggestions
  const t = cloneDeep(''); // Does provide import suggestions
  const d = moment().format('MMMM Do YYYY, h:mm:ss a'); // Does not provide import suggestions
  const p = (<Portal>my portal</Portal>) //Does provide import suggestions
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

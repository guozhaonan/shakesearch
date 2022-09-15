import React from 'react';
import Search from './components/Search/Search'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="welcome-text">Welcome to Shakesearch</h1>
        <h4 className="welcome-subtext">wherefore art thou exact matches?</h4>
        <h4>Type a word into the search bar and be rewarded with lines from the Bard!</h4>
      </header>
      <Search />
    </div>
  );
}

export default App;

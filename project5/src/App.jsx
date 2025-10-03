
import React from 'react';
import './App.css';
import Translator from './components/Translator';
import './Translator.css';
import languageList from './languageList.json';

function App() {
  return (
    <div className="App">
      <h1 className="app-title"> Language Translator</h1>
      <Translator />
    
    </div>
  );

}

export default App;

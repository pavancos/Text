import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [abbreviation, setAbbreviation] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('https://letsabbreviate-production.up.railway.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ acronym: input })
      });
      const data = await response.json();
      setAbbreviation(data.abbreviation);
    } catch (error) {
      console.error('Error generating abbreviation:', error);
    }
  };

  return (
    <div className="App">
      <h1>Acronym to Abbreviation Generator</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter an acronym" 
      />
      <button onClick={handleGenerate}>Generate</button>
      {abbreviation && (
        <div className="result">
          <h2>Abbreviation:</h2>
          <p>{abbreviation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

const models = [
  { id: 'medimg123', name: 'Medical Image Classifier', desc: 'Helps detect diseases.' },
  { id: 'sent456', name: 'Text Sentiment Analyzer', desc: 'Analyzes emotions.' },
];

function App() {
  return (
    <div className="App">
      <h1>Train ML Models</h1>
      <p>Pick a model and donate your compute power!!!!</p>
      {models.map((model) => (
        <div key={model.id} style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
          <h2>{model.name}</h2>
          <p>{model.desc}</p>
          <button onClick={() => alert('Coming soon!')}>Contribute</button>
        </div>
      ))}
    </div>
  );
}

export default App;
import { useRef, useState } from 'react';
import './App.css';
import data from './assets/data';

function App() {
  const word = useRef(null);
  const [definition, setDefinition] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const text = word.current.value.trim();
    if (text) {
      const foundDefinition = data.find(
        (item) => text.toLowerCase() === item.word.toLowerCase()
      );
      setDefinition(foundDefinition ? foundDefinition.meaning : "Word not found in the dictionary.");
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          ref={word}
          placeholder="Enter a word"
          defaultValue=""
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <strong>Definition:</strong>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default App;

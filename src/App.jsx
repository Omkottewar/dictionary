import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import data from './assets/data';

function App() {
  const word = useRef(null);
  const [definition, setDefinition] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const text = word.current.value;
    const foundDefinition = data.find((item) =>
      text.toLowerCase() === item.word.toLowerCase()
    );
    console.log(foundDefinition)
    setDefinition(foundDefinition ? foundDefinition.meaning : "Word not found in the dictionary");
  };

  return (
    <div className="">
      <form onSubmit={handleChange}>
        <input type="text" ref={word} />
        <button type="submit">Search</button>
      </form>
      <p>Definition: <span>{definition}</span></p>
    </div>
  );
}

export default App;

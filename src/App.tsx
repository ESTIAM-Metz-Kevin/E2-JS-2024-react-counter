import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import { useState } from 'react';

function App() {
  const [counters, updateCounters] = useState(new Array<string>());
  const [formName, setFormName] = useState("");
  const counterComponents = counters.map((name) => <Counter name={name} />);

  function addCounter() {
    updateCounters([...counters, formName]);
    setFormName("");
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter App</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addCounter();
      }}>
        <div>Ajouter un compteur :</div>
        <input type="text" name="name" onChange={e => setFormName(e.target.value)} value={formName} />
        <button type='submit'>Ajouter</button>
      </form>

      <div className="card counters">
        {counterComponents}
      </div>
    </>
  )
}

export default App

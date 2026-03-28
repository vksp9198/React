import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(9)  //hooks

  const addValue = () => {
    // count = count + 1;
    // console.log(count)
    if (count < 20) {
      setCount(count + 1);
    }
  }
  const removeValue = () => {
    // count = count - 1;
    // console.log(count)
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h4>React counter project - Hooks concept</h4>
      <div>counter Value : {count}</div><br />
      <button type="button" onClick={addValue}>Add value {count} </button>
      <br />
      <button type="button" onClick={removeValue}>Remove value {count} </button>
      <footer>{count} </footer>
    </>
  )
}

export default App

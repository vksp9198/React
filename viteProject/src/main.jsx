import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import Greet from './Greet.jsx'
import FruitName from './fruit.jsx'


const Name = () => {
  return (
    <h1>Vikas Prajapati</h1>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greet /> */}
    {/* <FruitName /> */}
    <Name />
  </StrictMode>,
)

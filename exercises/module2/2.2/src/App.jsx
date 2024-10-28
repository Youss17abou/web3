import { useState } from 'react'
import './App.css'
import BoxColor from './components/BoxColor'

function App() {
  const [color, setColor] = useState("red")
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const nextIndex = (current) => (colors.indexOf(current) + 1) % colors.length;

  const handleClickColor = () => {
    setColor((prevColor) => {
      return colors[nextIndex(prevColor)];
    });
  };

  return (
    <>
      <h1>exo 2.2 Composant de sélection de couleur</h1>
      <BoxColor colorValue={color} />
      <div className="card">
        <button onClick={handleClickColor}>
          color is {colors[nextIndex(color)]}
        </button>
      </div>
    </>
  )
}

export default App

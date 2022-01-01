import './App.css';
import colors from './json/colors'
import wendyMessage from'./json/wendy-message.json'
import { useState } from 'react';
import WendyMessage from './components/WendyMessage';

/* Funtions */
const getRamdonNumber = (maxLimit) => Math.floor(Math.random() * maxLimit);

function App() {

  /* UseState */
  const [message, setMessage] = useState(0);
  const handleMessage = () => {
    if (message < (wendyMessage.length - 1)) {
      setMessage(message+1);
    }
  };

  const color = colors[getRamdonNumber(colors.length)];

  /* UseEffect */
  document.body.style = `background: ${color}`;

  return (
    <>
      <WendyMessage 
        color    = {color}
        tittle   = {wendyMessage[message].tittle} 
        text     = {wendyMessage[message].text}
        image    = {wendyMessage[message].image}
        handleMessage={handleMessage}
      />
    </>
  );
}

export default App;

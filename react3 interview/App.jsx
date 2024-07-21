import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [arr, setarr] = useState([
      "play cricket",
      "play video game",
      "reak book",
      "go for a walk",
      "watch a movie",
      "listen to music",
      "exercise",
      "cook a meal",
      "learn coding",
      "write a journal",
      "paint a picture",
      "play basketball",
      "do yoga"
    ]);
    const [checked, setChecked] = useState({});
  
    const handlechecked = (index) => {
      setChecked((previousVal) => (
        {
        ...previousVal,
        [index]: !previousVal[index]
        
      }));
    };
  
    const handledeletebutton = (itemindex) => {
      // console.log(itemindex);
  
      let arrfilter = arr.filter((item, i) => {
        // console.log("filter", i);
        return i !== itemindex;
      });
      setarr(arrfilter);
  
    };
    return (
      <div className="App">
        <h1>List Items</h1>
        <ul>
          {arr.map((item, i) => {
            const ischecked = checked[i] || false;
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  onClick={() => handlechecked(i)}
                  checked={ischecked}
                />
                <span className='itemtodo'>{item}</span>
                {ischecked && (
                  <button
                    onClick={() => handledeletebutton(i)}
                    
                  >
                    x
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

export default App

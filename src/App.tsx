import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import './App.css';

function App() {

  // I used this site https://app.quicktype.io/?l=ts to generate my API into typescript
  // Here I am defining the properties of my API so it knows if it is a string or numger for example.
  interface Advise {
  slip: Slip;
  }

  interface Slip {
    id:     number;
    advice: string;
  }
  
    const getData = async ()=>{
      const advise = await fetch ("https://api.adviceslip.com/advice")
      const data = await advise.json();
      console.log(data) 
      setAdvise(data)
  }
  
  const [advise , setAdvise] = useState<Advise>({
    "slip": { 
      "id": -1, 
      "advice": ""
    }
  });
  
  useEffect(() =>{
    getData();
  },[])

  // It is very simple but here you have a button that fetches some random advise for you with the onClick function.
  return (
    <div className="App">
      <h1 className='title'>Need some advide? Click the button</h1>
      <div className='container'>
        <div>
        <p className='advice'>{advise.slip.advice}</p>
        </div>
        <button className="button" onClick={getData}>Random Advise</button>
      </div>
    </div>
  );
}

export default App;

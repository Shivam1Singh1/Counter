import React, { useState, useEffect } from 'react';


function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter === 10) {
        return 0;
      }
      return prevCounter + 1;
    });
  }
  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter === -1) {
        return 0;
      }
      return prevCounter - 1;
    });
  }
  return (
    <><h1> Chai and React  </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value   {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>{counter}</footer ></>

  );
}

export default App;

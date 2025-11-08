import React, { useState } from 'react'

const CounterApp = () => {
    const[count,setCount] = useState(0);

    const handleIncrement=()=> {
        setCount(count+1)
    };

    const handleDecrement=()=>{
        setCount(count-1)
    }

    const handlereset=()=>{
        setCount(0)
    }
    
  return (
    <>
     <h2>Counter App</h2>

     <h1>{count}</h1>

     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     <button onClick={handlereset}>Reset</button>
    </>

  )
}

export default CounterApp
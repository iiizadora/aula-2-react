import {useState} from 'react'

function Counter (){

  const [counter, setCounter] = useState(0)
  function decrement(){
    setCounter(counter-1)
  }

  function increment(){
    setCounter(counter+1)
  }
  return(
    <>
    <button onClick={decrement} >-</button>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    </>
  )
}

export default Counter
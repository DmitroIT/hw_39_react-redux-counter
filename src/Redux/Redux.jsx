import React from 'react'
import { increment, decrement, reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value)

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  const onReset = () => {
    dispatch(reset())
  }


  return (
    <>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </>
  )
}

export default Redux
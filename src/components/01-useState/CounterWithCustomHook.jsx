import React from 'react';
import { useCounter } from '../../hooks/useCounter';


export default function CounterWithCustomHook() {


    const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
        <h1>CounterWithCustomHook: { state }</h1><hr/>

        <button onClick={ () => increment(2) } className='btn btn-primary m-3'> +1 </button>
        <button onClick={ reset } className='btn btn-primary'> Reset </button>
        <button onClick={ () => decrement(10) } className='btn btn-primary'> -1 </button>

    </>
  )
}

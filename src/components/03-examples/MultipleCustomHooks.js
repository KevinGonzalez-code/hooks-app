import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFecth from '../../hooks/useFecth';
import '../02-useEffect/effects.css';

export default function MultipleCustomHooks() {
  
  const {counter, increment, decrement, reset} = useCounter(1);

 const {loading, data} = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);


 const {author, quote } = data ? data[0] : false;

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          loading 
          ?
          (<div className='alert alert-info text-center'>Loading...</div>)
          :
          (
            <blockquote className='blockquote text-right'>
                <p className='mb-2'> {quote} </p>
                <footer className='blockquote-footer'> { author } </footer>
            </blockquote>
          )
        }

        <button className='btn btn-primary' onClick={increment}>Siguiente frase</button>

        <button className='btn btn-primary m-3' onClick={increment}>Frase anterior</button>
       
    </>
  )
}

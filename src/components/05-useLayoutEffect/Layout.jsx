import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFecth from '../../hooks/useFecth';
import { LoadingQuote, Quote } from '../03-examples/';

export default function Layout() {

  const { counter, increment, decrement } = useCounter(1);

  const { loading, data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        loading
          ?
          <LoadingQuote />
          :
          <Quote quote={quote} author={author} />
      }

      <button
        className='btn btn-primary'
        onClick={increment}
        disabled={loading}>
        Siguiente frase
      </button>
      <button
        className='btn btn-primary m-3'
        onClick={decrement}
        disabled={loading}>
        Frase anterior
      </button>

    </>
  )
}

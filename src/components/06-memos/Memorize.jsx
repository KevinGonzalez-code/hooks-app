import React from 'react';
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    /*
        Al haber uin cambio en el componente padre, se renderiza de nuevo
        el componente hijo en este caso <Small />
        Para evitar esto podemos usar el hook useMemorize
    */

    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => setShow( !show ) }
            >
                Show/hide { JSON.stringify(show) }
            </button>

        </>
    )


}

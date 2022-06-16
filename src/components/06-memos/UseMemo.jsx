import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const hevayStuff = ( iterationNumber = 100 ) =>{
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahí vamos...");
    }

    return `${iterationNumber} iteration done`;
}


export const UseMemo = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo( () => hevayStuff(counter),[counter]);

    /*
        Al haber uin cambio en el componente padre, se renderiza de nuevo
        el componente hijo en este caso <Small />
        Para evitar esto podemos usar el hook useMemorize
    */

    return (
        <>
            <h1>Counter: {counter} </h1>
            <hr />

            <h4> { memorizedValue } </h4>

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

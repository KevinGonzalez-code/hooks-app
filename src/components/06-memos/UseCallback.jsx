import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const UseCallback = () => {

    const [counter, setCounter] = useState(10);
    //const increment = () => setCounter( counter +1 );

    /**
     * El hook useCallback sirve para memorizar funciones
     * es decir la referencia en memoria de las mismas y 
     * retorna la funcion memorizada se va a volver a procesar 
     * cuando algo cambie
     */

    const incrementFather = useCallback(
        (value) => {
            setCounter( (counter) => counter + value  );
        },
        [],
    )

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )

}

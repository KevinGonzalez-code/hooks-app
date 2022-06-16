import React from 'react';
import { useRef } from 'react';

export const FocusScreen = () => {

    /* 
    EL useRef nos permite tener una referencia de un elemento y cuando
    esa referencia cambia nostros no disparemos una redenrizacion de nuestro componente

    */

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }
 
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Introduce tu nombre"
                className="form-control"
            />

            <button
                className="btn btn-primary mt-3"
                onClick={onClick}
            >Set Focus</button>
        </>
    )
}

import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize( 
            { 
                width: Math.round(width),
                height:  Math.round(height)
            });   
    }, [])

    return (
        <>
            <blockquote
                className='blockquote text-right'
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className='mb-2'> {quote} </p>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>

            <code> { JSON.stringify(boxSize) } </code>
        </>
    )
}

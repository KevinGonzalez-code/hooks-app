import {memo} from 'react';

export const Small = memo(( { value } ) => {

    console.log(' Me volví agenerar ')

    return (
        <small>{value}</small>)
})

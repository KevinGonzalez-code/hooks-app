import { useState } from "react"

export const useCounter = ( inicialState = 10 ) => {

    const [state, setState] = useState(inicialState);

    const increment =  (factor = 1) => setState(state + factor);
    const decrement = (factor = 1) => setState(state - factor);
    const reset = () => setState(inicialState);

    return {
        state,
        increment,
        decrement,
        reset
    };

}

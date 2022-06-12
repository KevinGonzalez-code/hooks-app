import { useState } from "react";

//Custom hook que se va encargar de manejar el formulario

export default function useForm( inicialState = {}) {

    const [values, setValues] = useState(inicialState);

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [ target.name ]: target.value      
          });
    }

    return [ values, handleInputChange ];

}

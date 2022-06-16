import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

/*
  El hook useEffect nos permite ejecutar algun efecto secundario cuando
  algo suceda en nuestro componente.
 */

export default function SimpleForm() {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  
  
  //useEffect(() => console.log("hey"), []);

  //useEffect(() => console.log("formState cambio "), [formState]);

  //useEffect(() => console.log("email cambio "), [email]);


  
  const handleInputChange = ( {target} ) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value      
    });

  };

  return (
    <>
      <h1>UseEffect</h1>

      <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Tu nombre" value={name} 
              onChange={handleInputChange}/>
      </div><br/>

      <div className="form-group">
              <input type="text" name="email" className="form-control" placeholder="email@email.com" value={email} 
              onChange={handleInputChange}/>
      </div>

      { (name  === '123') && <Message /> }

    </>
  )
}

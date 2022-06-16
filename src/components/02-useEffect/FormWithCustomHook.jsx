import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';


/*
  El hook useEffect nos permite ejecutar algun efecto secundario cuando
  algo suceda en nuestro componente.
 */

export default function FormWithCustomHook() {


//Utilizo el custom hook de useForm
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;


  useEffect( ()=>{
    console.log('cambio');
  },[email] );


  const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>

      <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Tu nombre" value={name} 
              onChange={handleInputChange}/>
      </div><br/>

      <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="email@email.com" value={email} 
              onChange={handleInputChange}/>
      </div><br/>

      
      <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="********" value={password} 
              onChange={handleInputChange}/>
      </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-primary" >Reset</button>

    </form>
  )
}

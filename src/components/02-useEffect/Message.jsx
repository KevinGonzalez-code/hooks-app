import React, { useEffect, useState } from 'react'

export default function Message() {

  const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {

      //Al poner listener en el useEffect hay que tener cuidado porque
      //cuando el componente se desmonta los listener se siguen creando
      // y disparando y tenemos un gran consumo de memoria

      const mouseMove = (e) =>{
        const coors = { x: e.x, y: e.y };
        setCoords(coors)
        console.log(coors);
      }

      window.addEventListener('mousemove', mouseMove)


      return () => {
        //Eliminamos la referencia del evento
        window.removeEventListener('mousemove', mouseMove);
      }
    }, []);
    

  return (
    <div>
        <h3>Eres genial!</h3>
        <p>X: {coords.x} </p>
        <p>Y: {coords.y} </p>

    </div>
  )
}

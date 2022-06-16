import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar : (');

    /**
     * Las funciones y los objetos en javascript siempre a puntan
     * a posiciones en memoria diferentes entonces cada vez que el
     * componente se vuelve a dibujar la funcion increment del archivo
     * UseCallback.jsx cambia su posicion en memoria por lo cual no se puede
     * memorizar con el hook useMemo o con la funcion de React.memo()
     */

  return (
    <button
        className="btn btn-primary"
        onClick={ () => {
            increment(5);
        }}
    >Increment
    </button>
  )
})

import React from 'react'
import { useMayus } from '../hooks/useMayus'


export const PruebasCustom = () => {

    const {textoMayuscula} = useMayus("jereweb.es");

    textoMayuscula("/algo");

  return (
    <div>
        <hr />

        <h1>Probando componentes personalizados.</h1>

        <section>
            <p>El texto transformado a mayúscula es: </p> 
           
        </section>
    </div>
  )

}

import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const [miTexto, setMiTexto] = useState("Jeremías Informático");

    const {estado, textomayusculas, 
      textominusculas, concatenar
    } = useMayus("jereweb.es");

  return (
    <div>
        <hr />

        <h1>Probando componentes personalizados.</h1>

        <span className='m-2 mt-4 mb-4 p-2'>
          Valor del state de <code>PruebasCustom.jsx: </code> {miTexto}
        </span>

        <section>
            <p>
              El texto transformado a mayúscula o minúscula es: 
              &nbsp;
              {estado}
            </p> 
           
            <button
              className='btn btn-success'
              onClick={textomayusculas}
            >
              Texto a mayúsculas
            </button>
            <button
              className='btn btn-danger'
              onClick={textominusculas}
            >
              Texto a minúsculas
            </button>
            <button
              className='btn btn-info'
              onClick={e => concatenar("- Probando hooks personalizados como el, useMayus")}
            >
              Texto a concatenar
            </button>

        </section>
    </div>
  )

}

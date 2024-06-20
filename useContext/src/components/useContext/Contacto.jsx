import { useContext } from 'react'
import { PruebaContext } from '../../context/PruebaContext'

export const Contacto = () => {

  const dataFromContext = useContext(PruebaContext);

  return (
    <div>
      <h1>Componente Contacto</h1>
      <p>Página de contacto</p>

      {/* <p>Valor compartido: <pre>
        {JSON.stringify(dataFromContext.usuario)}
      </pre></p> */}

      {/* <p>
        Valor compartido con el Provider desde <i>App.jsx</i> : 
        <strong> {JSON.stringify(dataFromContext)}</strong>
      </p> */}
        
    </div>
  )
  
}

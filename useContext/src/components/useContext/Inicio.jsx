import { useContext } from 'react'
import { PruebaContext } from '../../context/PruebaContext';

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);
  console.log("Valor proveniente del componente App con el Provider del context, " + usuario);

  return (
    <div>
      <h1>Componente Inicio</h1>
      <p>Página de inicio</p>
      <p>
        Nombre: <i>{usuario.nombre}</i> - Web: <b>{usuario.web}</b>
      </p>
      {/* <span>
        <p>
          Valor compartido: <strong>{compartida.titulo}</strong>
        </p>
      </span> */}
    </div>
  )
  
}

import React, { useContext } from 'react'
import { PruebaContext } from '../../context/PruebaContext';

export const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  const guardarData = (e) => {

    e.preventDefault();
    let target = e.target;

    // console.log(target.nick.value);

    let usuario_registrado = {
      nick: target.nick.value,
      nombre: target.nombre.value,
      web: target.web.value
    }
    console.log(usuario);

    setUsuario(usuario_registrado);
  }

  return (
    <div>
      <h1>Componente Login</h1>
      <p>Página de login</p>

      <form className='m-2 mt-3 p-2'
        onSubmit={guardarData}
      >

        <label htmlFor="nick">Nick:</label>
        <input type="text"
          name='nick' 
          placeholder='Tu nick:'
          className='form-control m-2 p-2'
          required 
        />

        <label htmlFor="nombre">Nombre:</label>
        <input type="text"
          name='nombre' 
          placeholder='Tu nombre:'
          className='form-control m-2 p-2'
          required 
        />

        <label htmlFor="web">Web:</label>
        <input type="text"
          name='web' 
          placeholder='Tu web:'
          className='form-control m-2 p-2'
          required 
        />

        <input type="submit" 
          value="Enviar" 
          className='btn btn-danger m-2 p-2' 
        />

      </form>
    </div>
  )
  
}

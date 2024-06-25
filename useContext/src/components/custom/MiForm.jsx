
// import { useState } from 'react'

import { useState } from "react";
import { useForm } from "../hooks/useForm"

export const MiForm = () => {

    const [sent, isSent] = useState(false);
    const {formulario, enviado, cambiado} = useForm({});

  return (
    <div>
        <h1>Formulario</h1>

        <p>Form para guardar un curso.</p>
        <p>Curso guardado: {formulario}</p>
        <pre className='codigo m-2 p-2 font-monospace'>
            {JSON.stringify(formulario)}
        </pre>

        <form className='d-block m-2 p-2'
            onSubmit={enviado}
        >

            <input type="text" 
                name="titulo"
                onChange={cambiado} 
                placeholder='Título:' 
                className='form-control m-2 p-2 rounded-1 mw-50'
            />
            <input type="number" 
                name='anio'
                onChange={cambiado} 
                placeholder='Año publicación:'
                className='form-control m-2 p-2 rounded-1' 
            />
            <textarea name="descripcion" 
                onChange={cambiado}
                placeholder='Descripción'
                className='form-control m-2 p-2 rounded-1' 
            />
            <input type="text" 
                name='autor'
                onChange={cambiado} 
                placeholder='Autor:'
                className='form-control m-2 p-2 rounded-1' 
            />
            <input type="email" 
                name='email'
                onChange={cambiado} 
                placeholder='Correo:'
                className='form-control m-2 p-2 rounded-1' 
            />

            <input type="submit"
                className='btn btn-primary mt-3 rounded-1'
                value="Enviar" 
            />

            <input type="reset"
                className='btn btn-danger m-2 w-25 rounded-1'
                value="Resetear" 
            />

            {!cambiado ? (
                <div className='enviado alert alert-success m-2 p-2'>
                    <h3>Formulario enviado correctamente</h3>
                </div>
            ) : (
                <div 
                    className='no-enviado alert alert-danger m-2 mt-4 p-2'
                >
                    <h3>Formulario pendiente de enviar</h3>
                </div>
            )}

        </form>
    </div>
  )

}


import { useId } from 'react'
import { PruebasCustom } from '../custom/PruebasCustom';

export const UseIdComponent = () => {

    // const id = new Date().getTime();
    const identificador = useId();
    const segundo_id = useId();

    console.log(identificador, segundo_id);

  return (
    <div className="useId__container">

        <h1>Componente de useId</h1>
        <p>Página del hook useId</p>

        <input id={identificador} 
            className='form-control m-2 p-2 rounded-1'
            name='nombre' 
            placeholder='PRIMER id' 
        />

        <input id={segundo_id}  
            className='form-control m-2 p-2 rounded-1'
            name='segundo_nombre'
            placeholder='SEGUNDO id'
        />

        <span className='m-2 mt-4 p-2'>
          <PruebasCustom />
        </span>

    </div>
  )

}

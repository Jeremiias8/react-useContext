import { useState } from 'react'

export const Arrays = () => {

    const [array, setArray] = useState([
        "Jeremías", "Gerónimo", "Jeritto", "Jere"
    ]);

    const seteadoArray = () => {

        let indiceArray = array.at(2);

        setArray(indiceArray);
        console.log(setArray + "El índice del valor dos dentro del array es: " + indiceArray);
    }

    const filtradoArray = () => {

        let arrayFiltrado = array.filter(array.includes("Gerónimo", "Jere"));

        setArray(arrayFiltrado);
        console.log(arrayFiltrado);

    }

  return (
    <div className='container-fluid m-2 p-2'>
        <h1>Componente de Arrays</h1>

        <section className="content d-flex justify-content-center 
        m-auto m-2 mt-4 p-2">

            <ul>
                <li>
                    {seteadoArray}
                </li>
            </ul>

        </section>
    </div>
  )

}

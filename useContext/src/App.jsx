// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routing } from './routing/Routing'
import { PruebaContext } from './context/PruebaContext'
import { useEffect, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log("PRIMER useEffect");

    let usuarioStorage = JSON.parse(localStorage.getItem('usuario'));

    setUsuario(usuarioStorage);

  }, []);

  useEffect(() => {

    console.log("useEffect desde el App.jsx");

    // cada actualización de usuario, se guardará en el almacenamiento
    localStorage.setItem("usuario", JSON.stringify(usuario));

  }, [usuario]);

  {/*
  const curso = {
    id: 1,
    titulo: "Máster en React",
    contenido: "Horas de contenido de calidad"
  };
  */}

  return (
    <>
      <div className="app__container container-fluid m-2 p-2">

        <div className='m-2 mb-4 p-2'>

          {/* Proveendo el valor a todos los componentes que lo quieran usar */}
          <PruebaContext.Provider value={{
            usuario,
            setUsuario
          }}>
            <Routing />
          </PruebaContext.Provider>
        </div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      <h1>React - useContext y más hooks</h1>

      <div className="card">

        <footer className="footer m-2 mt-3 p-2">
          <p>
            Jeremías | React - 2024 &copy;
          </p>
        </footer>

      </div>

      </div>
    </>
  )
}

export default App

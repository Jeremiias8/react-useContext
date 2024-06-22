
import '../App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import App from '../App';

import { Inicio } from '../components/useContext/Inicio';
import { Articulos } from '../components/useContext/Articulos';
import { Acerca } from '../components/useContext/Acerca';
import { Login } from '../components/useContext/Login';
import { Contacto } from '../components/useContext/Contacto';
import { Arrays } from '../components/arrays/Arrays';

import { useContext } from 'react';
import { PruebaContext } from '../context/PruebaContext';

import { UseIdComponent } from '../components/useId/UseIdComponent';

export const Routing = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <div>

        <BrowserRouter>

          <header className="header container-fluid m-2 p-2">
            
            {/* Menu navegación */}
            <nav className='m-2 p-2 rounded-2'>

              <div className="logo">
                <h2>Repasando el hook useContext</h2>
              </div>

              <ul className='m-2 mt-3 mb-3'>
                <li>
                  <a className='text-white'><NavLink to="/">Inicio</NavLink></a>
                </li>
                <li>
                  <a><NavLink to="/articulos">Artículos</NavLink></a>
                </li>
                <li>
                  <a><NavLink to="/acerca">Acerca de</NavLink></a>
                </li>
                <li>  
                  <a><NavLink to="/contacto">Contacto</NavLink></a>
                </li>
                
                  {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                    <>
                      <li>
                        <a>
                          <NavLink to="/">{usuario.nick}</NavLink>
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={e => {

                          e.preventDefault();
                          setUsuario({});

                        }}>
                          Cerrar Sesión
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a>
                        <NavLink to="/login">Identifícate</NavLink>
                      </a>
                    </li>
                  )}

                <br />
                <li>
                  <a><NavLink to="/arrays">Arrays</NavLink></a>
                </li>
              </ul>

              <div className='m-2 p-2 bg-dark rounded-2'>
                <a><NavLink to="/useid">useId</NavLink></a>
              </div>
            </nav>

          </header>

          <section className="content">

            <Routes>

              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/articulos" element={<Articulos />} />
              <Route path="/acerca" element={<Acerca />} />
              <Route path="/login" element={<Login />} />
              <Route path="/nick" element={<Login />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/useid" element={<UseIdComponent />} />
              <Route path="*" element={<div>
                <h1>Página no encontrada</h1>
              </div>} />

            </Routes>

          </section>

        </BrowserRouter>

    </div>
  )

}

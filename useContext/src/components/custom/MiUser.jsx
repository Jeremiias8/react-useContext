
import React, { useEffect, useState } from 'react'

export const MiUser = () => {

    const [usuario, setUsuario] = useState({
        datos: null,
        cargando: true
    });

    const fetchUser = async (url) => {

        const request = await fetch(url);
        const {data} = await request.json();

        console.log(data);

        setUsuario({
            datos: data
        });
    }

    const peticionId = (e) => {

        // coge el valor del input
        let id = parseInt(e.target.value);

        // con cada cambio en el input, ejecuta la petición, obteniendo un value diferente relacionado con el id
        let url = "https://reqres.in/api/users/" + id;
        // alert(e.target.id.value);

        fetchUser(url);
    }

    useEffect(() => {

        fetchUser("https://reqres.in/api/users/1");

    }, []);

  return (
    <div>
        <h1>Mi user:</h1>
        <p>Data del user:</p>
        <p>{usuario.cargando ? "Cargando..." : ""}</p>

        <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>

        <input type="number" 
            name='id'
            className='form-control m-2 p-2'
            onChange={peticionId} 
            required 
        />
    </div>
  )

}

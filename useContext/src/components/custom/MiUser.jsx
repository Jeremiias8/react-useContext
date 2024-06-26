
import { useState } from "react";
import { useAjax } from "../hooks/useAjax";

export const MiUser = () => {

    const [url, setUrl] = useState("https://reqres.in/api/users/1");

    const {datos, cargando} = useAjax(url);
    // const {fetchUserData} = useAjax();

    const peticionId = (e) => {

        // coge el valor del input
        let id = parseInt(e.target.value);

        // con cada cambio en el input, ejecuta la petición, obteniendo un value diferente relacionado con el id
        // let url = "https://reqres.in/api/users/" + id;
        // alert(e.target.id.value);

        setUrl("https://reqres.in/api/users/" + id);
    }

  return (
    <div>
        <h1>Mi user:</h1>
        <p>Data del user:</p>
        <p>{cargando ? "Cargando..." : ""}</p>

        <p>{datos?.first_name} {datos?.last_name}</p>

        <input type="number" 
            name='id'
            className='form-control m-2 p-2'
            onChange={peticionId} 
            required 
        />
    </div>
  )

}

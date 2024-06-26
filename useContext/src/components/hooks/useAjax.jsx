
import { useState, useEffect } from "react";

export const useAjax = (url) => {

    const [estado, setEstado] = useState({
        datos: null,
        cargando: true
    });

    const fetchUserData = async () => {

        setEstado({
            ...estado,
            cargando: true
        });

        const request = await fetch(url);
        const {data} = await request.json();

        // console.log(data);

        setEstado({
            datos: data,
            cargando: false
        });

    }

    useEffect(() => {

        fetchUserData();
        console.log(url);

    }, [url]);

    return {
        datos: estado.datos,
        cargando: estado.cargando
    };

}
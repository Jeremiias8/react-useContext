import { useState } from "react";

export const useMayus = (texto) => {

    const [text, setText] = useState("jeremiasweb"); 

    const textomayusculas = () => {

        setText(texto.toUpperCase());
        
    }

    const textominusculas = () => {

        setText(texto.toLowerCase());

    }

    const concatenar = (agregado) => {

        setText(texto + agregado);

    }

    return {
        estado: text,
        textomayusculas,
        textominusculas,
        concatenar
    };

}
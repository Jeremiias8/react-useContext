
export const useMayus = (texto) => {

    const textoMayuscula = (valor = "") => {

        return texto.toUpperCase();
        
    }

    const textoMinuscula = () => {

        return texto.toLowerCase();

    }

    const concatenar = (agregado) => {

        return texto + agregado;

    }

    return (
        textoMayuscula,
        textoMinuscula,
        concatenar
    );

}
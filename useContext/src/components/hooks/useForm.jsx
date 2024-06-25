
import '../../App.css'
import { useState } from "react"

export const useForm = (objInicial = {}) => {

    const [formulario, setFormulario] = useState({objInicial});

    const serializarForm = (formulario) => {

        // 'new FormData', da la posibilidad de acceder fácilmente a cada input del formulario
        const formData = new FormData(formulario); 
        console.log(formData);

        const objCompleto = {};

        for (let [name, value] of formData) {

            objCompleto[name] = value;
        }

        return objCompleto;
    }

    const enviado = (e) => {

        e.preventDefault();
        /* document.getElementsByClassName('codigo')
            .classList
            .add('enviado'); */

        /*
        let curso = {
            titulo: e.target.titulo.value, 
            anio:  e.target.anio.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }
        */

        let curso = serializarForm(e.target);

        setFormulario(curso);
    }

    const cambiado = ({target}) => {

        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        })

        console.log(formulario);

    }    

    return {
        estado: formulario,
        enviado,
        cambiado
    };
    
}
import React from 'react';
import '../Styles/TareaFormulario.css'

function TareaFormulario () {
    return (
        <form
            className='tarea-formulario'>
                <input 
                    className='tarea-input'
                    type='text'
                    placeholder='Escribe una tarea'
                    name='texto'>
                </input>
                <button className='tarea-boton'>
                    Agregar
                </button>
        </form>
    )
}

export default TareaFormulario;
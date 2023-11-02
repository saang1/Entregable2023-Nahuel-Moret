import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Formulario = () => {
    
    const [nombre, setNombre] =  useState("")
    const [animal, setAnimal] =  useState("")
    const [error, setError] = useState(false);




    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombre.trim().length < 3 || nombre.trim().includes(' ') || animal.length < 3) {
            setError(true);
        } else {
            setError(false);
        }
    };

    
    
    return (
    <>
        <h2>Tu animal favorito !</h2>

        <form
            onSubmit={handleSubmit}
        >
            <label htmlFor="">Nombre: </label>
            <input 
                type="text" 
                placeholder='Ingresar Nombre'
                value={nombre}
                onChange={e =>setNombre(e.target.value)}
            />


            <label htmlFor="">Cual es tu Animal Favorito? : </label>
            <input 
                type="text" 
                placeholder='Ingrese Nombre de Animal'
                value={animal}
                onChange={e=>setAnimal(e.target.value)}
            />


            <button type='submit'>
                Enviar
            </button>
        </form>
        {error && <p>Por favor chequea que la información sea correcta</p>}
        {!error && <Card nombre={nombre} animal={animal} />}
    </>
    )
}

export default Formulario
import React, { useState } from 'react';
import Card from './Card';
import style from'./Fomulario.module.css'

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [personaFavorita, setPersonaFavorita] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los valores ingresados
    if (nombre.length < 3 || nombre.includes(' ')) {
      setMensajeError('Por favor chequea que la informacion sea correcta.')
      setMostrarCard(false);
      return;
    }
    if(personaFavorita.length <6){
        setMensajeError ('Por favor chequea que la informacion sea correcta.')
        setMostrarCard(false)
        return;
    }
    // Mostrar el componente "Card"
    setMensajeError('')
    setMostrarCard(true);    
  }
  return (
    <div>
      <form  className={style.form}onSubmit={handleSubmit}>
        <label className={style.label}>
        <p>Nombre del alumno:</p>
          <input className={style.input} type="text" value={nombre} onChange={event => setNombre(event.target.value)} />
        </label>
        <br />
        <label>
        <p>Nombre de tu persona favorita:</p>
          <input className={style.input} type="text" value={personaFavorita} onChange={event => setPersonaFavorita(event.target.value)} />
        </label>
        <br />
        <button className={style.button} type="submit">Enviar</button>
      </form>
      {/* Mostrar el mensaje de error si existe */}
      {mensajeError && <p className={style.error}>{mensajeError}</p>}
      {/* Renderizar el componente "Card" si mostrarCard es verdadero */}
      {mostrarCard && (
        <>
        <div className={style.card}>
        <h3>Datos Ingresados</h3>
        <p>Hola <Card nombre={nombre} /> Tu persona favorita es <Card personaFavorita={personaFavorita}/></p>
        </div>
        </>
        )}
    </div>
  );
}

export default Formulario;
import style from './Fomulario.module.css'
function Card(props) {
    return (
      <div>
        <p>{props.nombre}</p>
        <p>{props.personaFavorita}</p>
      </div>
    );
  }
  export default Card;
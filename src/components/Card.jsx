import Rating from "./Rating"

function Card(props) {
  return (
      <div className="card">
        <h2>{props.name}</h2>
        <p><span>Вселенная: </span>{props.universe}</p>
        <p><span>Альтер-эго: </span>{props.alterego}</p>
        <p><span>Род деятельности: </span>{props.occupation}</p>
        <p><span>Друзья: </span>{props.friends}</p>
        <p><span>Супер силы: </span>{props.superpowers}</p>
        <img src={props.imgLink} alt={props.name}/>
        <p className="card__info"><span>Описание: </span>{props.description}</p>
        <div className="card__checkbox">
          <Rating />
        </div>
      </div>
  )
}

export default Card
function Card(props) {
  return props.cards.map((card) => (
    <div className="card__template" key={Math.random()}>
      <div className="elements">
        <img
          className="content__elements-image"
          src={card.link}
          alt="imagenes-tarjetas"
          onClick={() => props.handleCardClick(card)}
        />
        <button className="content__elements__delete-button"></button>
        <div className="conent__elements-title-container">
          <h2 className="content__elements-title">{card.name}</h2>
          <div className="content__elements-likes-container">
            <button className="content__elements__button-like"></button>
            <span className="content__elements__numbers-like">
              {card.likes.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Card;

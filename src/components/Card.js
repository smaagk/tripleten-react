function Card(props) {
  return props.cards.map((card) => (
    <div class="card__template">
      <div class="elements">
        <img
          class="content__elements-image"
          src={card.link}
          alt="imagenes-tarjetas"
          onClick={() => props.handleCardClick(card)}
        />
        <button class="content__elements__delete-button"></button>
        <div class="conent__elements-title-container">
          <h2 class="content__elements-title">{card.name}</h2>
          <div class="content__elements-likes-container">
            <button class="content__elements__button-like"></button>
            <span class="content__elements__numbers-like">
              {card.likes.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Card;

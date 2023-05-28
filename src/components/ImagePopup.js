function ImagenPopup(props) {
  return (
    <section
      className={`overlay ${
        Object.keys(props.selectedCard).length > 0 ? "overlay__visible" : ""
      } `}
      id="overlayCardPreview"
    >
      <div class="overlay__content overlay__content-preview">
        <figure class="overlay__figure">
          <img
            src={props.selectedCard.link}
            alt="tarjeta con imagen"
            class="overlay__preview-image"
          />
          <figcaption class="overlay__preview-caption">
            {props.selectedCard.name}
          </figcaption>
        </figure>
        <button
          class="overlay__form-close-button"
          id="closePreviewOverlay"
          onClick={props.isClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagenPopup;

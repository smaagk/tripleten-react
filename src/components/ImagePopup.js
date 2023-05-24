function ImagenPopup() {
  return (
    <section class="overlay" id="overlayCardPreview">
      <div class="overlay__content overlay__content-preview">
        <figure class="overlay__figure">
          <img
            src="#"
            alt="tarjeta con imagen"
            class="overlay__preview-image"
          />
          <figcaption class="overlay__preview-caption">Morelia</figcaption>
        </figure>
        <button
          class="overlay__form-close-button"
          id="closePreviewOverlay"
        ></button>
      </div>
    </section>
  );
}

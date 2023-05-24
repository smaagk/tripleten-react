function PopupWithForm(props) {
  return (
    <>
      <section
        className={`overlay overlay_type_${props.name} ${
          props.isOpen ? "overlay__visible" : ""
        } `}
      >
        <div class="overlay__content">
          <h2 class="overlay__title">{props.title}</h2>
          <form
            class="overlay__form"
            id="profileForm"
            novalidate
            name={props.name}
          >
            {props.children}
            <button
              class="overlay__form-submit-button"
              type="submit"
              data-valordefault="Guardar"
            >
              Guardar
            </button>
          </form>
          <button
            class="overlay__form-close-button"
            id="closeProfileOverlay"
          ></button>
        </div>
      </section>

      {/* <section class="overlay" id="overlay__card-add">
        <div class="overlay__content">
          <form class="overlay__form" id="imageForm" novalidate>
            <h2 class="overlay__title">Nuevo lugar</h2>
            <div class="overlay__form-input-grup">
              <input
                class="overlay__text-input"
                type="text"
                name="place"
                id="overlay__form-place"
                placeholder="Título"
                required
                minlength="2"
                maxlength="30"
              />
            </div>
            <span class="overlay__form-input-error overlay__form-place-error"></span>

            <div class="overlay__form-input-grup">
              <input
                class="overlay__text-input"
                type="url"
                name="imageURL"
                id="overlay__form-imageURL"
                placeholder="Enlace a la imagen"
                required
              />
            </div>
            <span class="overlay__form-input-error overlay__form-imageURL-error"></span>

            <button
              class="overlay__form-submit-button"
              type="submit"
              data-valordefault="Crear"
            >
              Crear
            </button>
          </form>
          <button
            class="overlay__form-close-button"
            id="closeImageOverlay"
          ></button>
        </div>
      </section>

      <section class="overlay" id="overlayCardDelete">
        <div class="overlay__content">
          <form class="overlay__form" id="FormCardDelete" novalidate>
            <h2 class="overlay__title">¿Estás seguro?</h2>
            <button
              class="overlay__form-submit-button"
              type="submit"
              data-valordefault="Sí"
            >
              Sí
            </button>
          </form>
          <button
            class="overlay__form-close-button"
            id="closeCardDeleteOverlay"
          ></button>
        </div>
      </section>

      <section class="overlay" id="overlayAvatarUpdate">
        <div class="overlay__content">
          <form class="overlay__form" id="imageAvatar" novalidate>
            <h2 class="overlay__title">Cambiar foto de perfil</h2>
            <div class="overlay__form-input-grup">
              <input
                class="overlay__text-input"
                type="text"
                name="place"
                placeholder="Imagen URL"
                id="overlay__form-avatar-update"
                required
                minlength="2"
              />
            </div>
            <span class="overlay__form-input-error overlay__form-avatar-update-error"></span>

            <button
              class="overlay__form-submit-button"
              type="submit"
              data-valordefault="Guardar"
            >
              Guardar
            </button>
          </form>
          <button
            class="overlay__form-close-button"
            id="closeAvatarOverlay"
          ></button>
        </div>
      </section> */}
    </>
  );
}

export default PopupWithForm;

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title={props.title}
    >
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
    </PopupWithForm>
  );
}

export default AddPlacePopup;

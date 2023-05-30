import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title={props.title}
    >
      <div className="overlay__form-input-grup">
        <input
          className="overlay__text-input"
          type="text"
          name="place"
          id="overlay__form-place"
          placeholder="Título"
          required
          minLength="2"
          maxLength="30"
        />
      </div>
      <span className="overlay__form-input-error overlay__form-place-error"></span>

      <div className="overlay__form-input-grup">
        <input
          className="overlay__text-input"
          type="url"
          name="imageURL"
          id="overlay__form-imageURL"
          placeholder="Enlace a la imagen"
          required
        />
      </div>
      <span className="overlay__form-input-error overlay__form-imageURL-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title={props.title}
      isOpen={props.isOpen}
      isClose={props.isClose}
    >
      <div className="overlay__form-input-grup">
        <input
          className="overlay__text-input"
          type="text"
          name="place"
          placeholder="Imagen URL"
          id="overlay__form-avatar-update"
          required
          minLength="2"
        />
      </div>
      <span className="overlay__form-input-error overlay__form-avatar-update-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

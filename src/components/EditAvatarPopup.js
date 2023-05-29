import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title={props.title}
      isOpen={props.isOpen}
      isClose={props.isClose}
    >
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
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
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
          name="name"
          id="overlay__form-name"
          placeholder="Escribe el nombre"
          required
          minlength="2"
          maxlength="40"
        />
      </div>
      <span class="overlay__form-input-error overlay__form-name-error"></span>

      <div class="overlay__form-input-grup">
        <input
          class="overlay__text-input"
          type="text"
          name="job"
          id="overlay__form-job"
          placeholder="Escribe la ocupación"
          required
          minlength="2"
          maxlength="200"
        />
      </div>
      <span class="overlay__form-input-error overlay__form-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

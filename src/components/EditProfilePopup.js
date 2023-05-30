import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
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
          name="name"
          id="overlay__form-name"
          placeholder="Escribe el nombre"
          required
          minLength="2"
          maxLength="40"
        />
      </div>
      <span className="overlay__form-input-error overlay__form-name-error"></span>

      <div className="overlay__form-input-grup">
        <input
          className="overlay__text-input"
          type="text"
          name="job"
          id="overlay__form-job"
          placeholder="Escribe la ocupación"
          required
          minLength="2"
          maxLength="200"
        />
      </div>
      <span className="overlay__form-input-error overlay__form-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

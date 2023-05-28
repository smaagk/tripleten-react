import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} isClose={props.isClose}>
      <h1>Titulo</h1>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

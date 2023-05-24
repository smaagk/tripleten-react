import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import EditProfilePopup from "./components/EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setisAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  return (
    <body class="root">
      <Header />
      <Main
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <AddPlacePopup
        title=""
        name=""
        isOpen={isAddPlacePopupOpen ? "true" : ""}
      />
      <EditAvatarPopup
        title=""
        name=""
        isOpen={isEditAvatarPopupOpen ? "true" : ""}
      />
      <EditProfilePopup
        title=""
        name=""
        isOpen={isEditProfilePopupOpen ? "true" : ""}
      />

      <template class="card__template">
        <div class="elements">
          <img
            class="content__elements-image"
            src=" "
            alt="imagenes-tarjetas"
          />
          <button class="content__elements__delete-button"></button>
          <div class="conent__elements-title-container">
            <h2 class="content__elements-title"></h2>
            <div class="content__elements-likes-container">
              <button class="content__elements__button-like"></button>
              <span class="content__elements__numbers-like">0</span>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;

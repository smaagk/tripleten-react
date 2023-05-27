import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import EditProfilePopup from "./components/EditProfilePopup";
import api from "./utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisAvatarPopupOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setselectedCard] = useState({});

  function handleEditAvatarClick() {
    setisAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleClosePopup() {
    setisAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setselectedCard({});
  }

  function handleCardClick(oCard) {
    setselectedCard(oCard);
  }

  useEffect(() => {
    api
      .getInitialUserMe()
      .then((res) => {
        setcurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        handleEditProfileClick={handleEditProfileClick}
        handleAddPlaceClick={handleAddPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
        cards={cards}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <AddPlacePopup
        title=""
        name=""
        isClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen ? "true" : ""}
      />
      <EditAvatarPopup
        title=""
        name=""
        isClose={handleClosePopup}
        isOpen={isEditAvatarPopupOpen ? "true" : ""}
      />
      <EditProfilePopup
        title=""
        name=""
        isClose={handleClosePopup}
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
    </CurrentUserContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main class="content">
      <section class="profile">
        <div
          class="content__profile-avatar-overlay"
          onClick={props.handleEditAvatarClick}
        >
          <div style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
        </div>
        <div class="content__profile-title-grup">
          <div class="content__profile-title-container">
            <h1 class="content__profile-title">{currentUser.name}</h1>
            <button
              class="content__profile-button-edit"
              onClick={props.handleEditProfileClick}
            ></button>
          </div>
          <p class="content__profile-description">{currentUser.about}</p>
        </div>
        <button
          class="content__profile-button-add"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>

      <section class="elements">
        <div id="gallery" class="content__elements-grid">
          {props.cards.map((card) => (
            <div class="card__template">
              <div class="elements">
                <img
                  class="content__elements-image"
                  src={card.link}
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

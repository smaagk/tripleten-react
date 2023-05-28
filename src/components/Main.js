import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

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
      <div id="gallery" class="content__elements-grid">
        <Card cards={props.cards} handleCardClick={props.handleCardClick} />
      </div>
      <section class="elements">
        <div id="gallery" class="content__elements-grid"></div>
      </section>
    </main>
  );
}

export default Main;

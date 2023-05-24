function Main(props) {
  return (
    <main class="content">
      <section class="profile">
        <div
          class="content__profile-avatar-overlay"
          onClick={props.handleEditAvatarClick}
        >
          <img
            class="content__profile-image"
            src="<%= require('./images/profile-image.jpg')%>"
            alt="jacques cousteau"
          />
        </div>
        <div class="content__profile-title-grup">
          <div class="content__profile-title-container">
            <h1 class="content__profile-title"></h1>
            <button
              class="content__profile-button-edit"
              onClick={props.handleEditProfileClick}
            ></button>
          </div>
          <p class="content__profile-description"></p>
        </div>
        <button
          class="content__profile-button-add"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>

      <section class="elements">
        <div id="gallery" class="content__elements-grid"></div>
      </section>
    </main>
  );
}

export default Main;

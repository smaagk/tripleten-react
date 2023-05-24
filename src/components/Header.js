import logo from "../images/logo.svg";

function Header() {
  return (
    <header class="header">
      <img class="header__logo" src={logo} alt="logo" />
      <div class="header__line"></div>
    </header>
  );
}

export default Header;

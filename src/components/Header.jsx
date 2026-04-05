import logo from "../assets/images/pokeball.svg";
import "../styles/Header.css";

export default function Header() {

  return (
    <header>
      <img src={logo} alt="Pokeball logo" className="header-logo" />
      <h1>Pokemon Memory Game</h1>
    </header>
  );
}
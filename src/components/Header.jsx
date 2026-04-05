import logo from "../assets/pokeball.svg"

export default function Header() {

  return (
    <header>
      <img src={logo} alt="Pokeball logo" className="header-logo" width={48}/>
      <h1>Pokemon Memory Game</h1>
    </header>
  );
}
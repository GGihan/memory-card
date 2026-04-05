import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import "../styles/Footer.css";

export default function Footer() {

  return (
     <footer>
      <nav className="socials" aria-label="Social media links">
        <ul>
          <li>
            <a 
              href="https://github.com/GGihan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <img src={github} alt="" role="presentation" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin homepage (opens in a new tab)"
            >
              <img src={linkedin} alt="" role="presentation" />
            </a>
          </li>
          <li>
            <a 
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter homepage (opens in a new tab)"
            >
              <img src={twitter} alt="" role="presentation" />
            </a>
          </li>
        </ul>
      </nav>
      <p>@GGihan</p>
    </footer>
  );
}
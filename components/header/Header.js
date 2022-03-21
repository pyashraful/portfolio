import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import styles from "./header.module.css";
import { BsFillPersonFill } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header
        id={styles.header}
        className="d-flex flex-column justify-content-center"
      >
        <Navbar id="navbar" className={styles.nav_menu}>
          <ul>
            <li>
              <Nav.Link href="#hero" className="nav-link scrollto active">
                <i className="bi bi-house-fill"></i>
                <span>Home</span>
              </Nav.Link>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bi bi-person-fill"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </Navbar>
      </header>
    </div>
  );
}

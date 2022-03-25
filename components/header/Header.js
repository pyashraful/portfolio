import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import styles from "./header.module.css";
import {
  BiHome,
  BiUser,
  BiFileBlank,
  BiBookContent,
  BiServer,
  BiEnvelope,
} from "react-icons/bi";

export default function Header() {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header
        id={styles.header}
        className="d-flex flex-column justify-content-center"
      >
        <nav id="navbar" className={` navbar ${styles.nav_menu}`}>
          <ul>
            <li>
              <Nav.Link href="#hero" className="nav-link scrollto active">
                <BiHome className={styles.nav_icons} />
                <span>Home</span>
              </Nav.Link>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                {/* <i className="bx bx-user"></i> */}
                <BiUser className={styles.nav_icons} />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <BiFileBlank className={styles.nav_icons} /> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <BiBookContent className={styles.nav_icons} />{" "}
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <BiServer className={styles.nav_icons} /> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <BiEnvelope className={styles.nav_icons} /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

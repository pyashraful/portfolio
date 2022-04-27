import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import styles from "./header.module.css";
import { BsList, BsX } from "react-icons/bs";
import {
  BiHome,
  BiUser,
  BiFileBlank,
  BiBookContent,
  BiServer,
  BiEnvelope,
} from "react-icons/bi";

const navMenu = [
  { name: "Home", icon: <BiHome />, link: "/" },
  { name: "About", icon: <BiUser />, link: "/about" },
];

export default function Header({ isActive, setActive }) {
  console.log("🚀 ~ file: Header.js ~ line 21 ~ Header ~ isActive", isActive);
  function handleToggle() {
    setActive(!isActive);
    console.log(
      "🚀 ~ file: Header.js ~ line 24 ~ handleToggle ~ isActive",
      isActive
    );
  }

  return (
    <div className={isActive ? `mobile-nav-active` : null}>
      {isActive ? (
        <BsX
          style={{ height: "38px", width: "38px" }}
          onClick={handleToggle}
          className="mobile-nav-toggle d-xl-none"
        />
      ) : (
        <BsList
          style={{ height: "38px", width: "38px" }}
          onClick={handleToggle}
          className=" mobile-nav-toggle d-xl-none"
        />
      )}
      <header
        id={styles.header}
        className={
          isActive
            ? ` ${styles.mobileNav} d-flex flex-column justify-content-center`
            : "d-flex flex-column justify-content-center"
        }
      >
        <nav id="navbar" className={`navbar ${styles.nav_menu}`}>
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
            {/* <li>
              <a href="#services" className="nav-link scrollto">
                <BiServer className={styles.nav_icons} /> <span>Services</span>
              </a>
            </li> */}
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

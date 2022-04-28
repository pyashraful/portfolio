import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import {
  FaGithubAlt,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";

const words = ["Frontend Engineer", "JavaScrip Developer", "instagram"];

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container">
          <h1>MD Ashraful Islam</h1>
          <p>
            I&apos;m{" "}
            <span
              ref={el}
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
          <div className="social-links">
            <a href="#" className="github">
              <FaGithubAlt />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="google-plus">
              <FaSkype />
            </a>
            <a href="#" className="twitter">
              <FaTwitter />
            </a>
            <a href="#" className="facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </section>
      {/* <div className="hero_bg_img">
        <Image
          alt="hero"
          className="hero-image"
          src="/img/hero-bg-1.jpg"
          height="100%"
          width="100%"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
    </>
  );
}

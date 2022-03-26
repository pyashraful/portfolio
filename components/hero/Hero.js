import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <h1>MD Ashraful Islam</h1>
        <p>
          Im{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <FaTwitter className="hero_soccial_icon" />
          </a>
          <a href="#" className="facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="instagram">
            <FaInstagram className="hero_soccial_icon" />
          </a>
          <a href="#" className="google-plus">
            <FaSkype className="hero_soccial_icon" />
          </a>
          <a href="#" className="linkedin">
            <FaLinkedinIn className="hero_soccial_icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

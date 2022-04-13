import {
  FaGithubAlt,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Md Ashraful Islam</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
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
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: [license-url] -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>

      <div className="social-links">
        <a
          href="https://github.com/janani66-C"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/janani-k-7a614633b"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
  href="/resume.pdf"
  download="Janani_K_Resume.pdf">
  Resume
</a>
      </div>
    </section>
  );
}

export default Contact;
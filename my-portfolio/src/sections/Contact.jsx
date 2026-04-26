import Section from "../components/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css"


function Contact() {
  return (
    <Section id="contact" >
      <div
        className="contact-container"
        style={{
          flexWrap: "wrap",
        }}
      >
        <div
          className="contact-text"
          style={{
            maxWidth: "500px",
            lineHeight: "1.5",
            // height: "1500px"
          }}
        >
          <h1 style={{ marginBottom: "10px"}}>
            Happy to connect!
          </h1>

        </div>

        <div className="contact-icons">
          {/* <FaGithub /> */}
          <a
            href="https://www.linkedin.com/in/raghav-tiwari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href="mailto:raghavtiwari7151@gmail.com"
          className="contact-email"
        >
          raghavtiwari7151@gmail.com
        </a>

      </div>



    </Section>
  );
}

export default Contact;
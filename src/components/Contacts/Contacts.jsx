import "./Contacts.css";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7ni4wd', 'template_lww6baf', form.current, 'ZQKU4Kwo1GMhUL7Ps')

    .then(() => {
        alert("Message sent successfully!");
    })
     .catch((error) => {
        alert("Failed to send the message, please try again.");
    });
     e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="line"></div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <FaUser className="contact-icon" />
          <input type="text" name="name" placeholder="Your Name" required/>
        </div>

        <div className="input-box">
          <FaEnvelope className="contact-icon" />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="input-box">
          <FaComment className="contact-icon" />
          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
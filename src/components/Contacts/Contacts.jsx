import "./Contacts.css";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Reveal from "../Reveal/Reveal";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("Failed to send the message, please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <Reveal direction="down">
        <h2>Contact Me</h2>
        <div className="line"></div>
      </Reveal>

      <Reveal direction="up" delay={0.15}>
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

          <button type="submit" disabled={sending}>
            {sending ? "Yuborilmoqda..." : "Send Message"}
          </button>
        </form>
      </Reveal>
    </section>
  );
}

export default Contact;

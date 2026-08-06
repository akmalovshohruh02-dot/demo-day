import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Men haqimda</h1>

      <div className="line"></div>

      <p>
        Salom men Frontend dasturchiman. Men React, JavaScript, HTML va CSS texnologiyalarida 
        tajribaga egaman. Men veb-saytlar va veb-ilovalarni yaratishda foydalanuvchi tajribasini 
        oshirishga qaratilgan yechimlar ishlab chiqishga qiziqaman.
      </p>

      <p>
        Mening maqsadim foydalanuvchilarga qulay va samarali veb-ilovalarni yaratishdir.
      </p>

      <a href="https://wa.me/998977451105" className="contact-button" target="_blank" rel="noreferrer">
        Bog'lanish
      </a>
    </motion.div>
  );
}

export default About;

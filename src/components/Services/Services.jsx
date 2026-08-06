import "./Services.css";
import { FaLaptopCode, FaPaintBrush, FaRocket, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";

const services = [
  { Icon: FaLaptopCode, title: "Frontend", text: "React yordamida zamonaviy web saytlar yarataman." },
  { Icon: FaPaintBrush, title: "Dizayn", text: "Chiroyli va foydalanuvchi uchun qulay UI yarataman." },
  { Icon: FaCheckCircle, title: "Sifat", text: "Toza va tushunarli kod yozishga e'tibor beraman." },
  { Icon: FaRocket, title: "Tezkorlik", text: "Loyihalarni belgilangan muddatda topshiraman." },
];

function Services() {
  return (
    <div className="services">
      <Reveal direction="down">
        <h2>Men nimalar qila olaman</h2>
        <div className="line"></div>
      </Reveal>

      <div className="service-grid">
        {services.map(({ Icon, title, text }, i) => (
          <Reveal key={title} direction="up" delay={i * 0.1}>
            <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
              <Icon className="service-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Services;

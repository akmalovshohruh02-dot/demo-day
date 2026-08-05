import "./Services.css";
import { FaLaptopCode, FaPaintBrush, FaRocket, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="services">
      <h2>Men nimalar qila olaman</h2>
      <div className="line"></div>

      <div className="service-grid">

        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="service-icon" />
          <h3>Frontend</h3>
          <p>React yordamida zamonaviy web saytlar yarataman.</p>
        </motion.div>

        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaPaintBrush className="service-icon" />
          <h3>Dizayn</h3>
          <p>Chiroyli va foydalanuvchi uchun qulay UI yarataman.</p>
        </motion.div>

        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCheckCircle className="service-icon" />
          <h3>Sifat</h3>
          <p>Toza va tushunarli kod yozishga e'tibor beraman.</p>
        </motion.div>

        <motion.div
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaRocket className="service-icon" />
          <h3>Tezkorlik</h3>
          <p>Loyihalarni belgilangan muddatda topshiraman.</p>
        </motion.div>

      </div>
    </div>
  );
}

export default Services;
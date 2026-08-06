import { motion } from "framer-motion";

// direction: "up" (pastdan chiqadi), "down" (tepadan tushadi),
// "left" (chapdan), "right" (o'ngdan)
const OFFSETS = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

function Reveal({ children, direction = "up", delay = 0, duration = 0.6, className = "" }) {
  const offset = OFFSETS[direction] || OFFSETS.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;

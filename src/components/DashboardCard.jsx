import { motion } from "framer-motion";

function DashboardCard({ title, value }) {
  return (
    <motion.div

      whileHover={{
        y: -10,
        scale: 1.03,
      }}

      className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl"

    >

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

      <div className="relative z-10">

        <h2 className="text-white text-6xl font-black mb-10 tracking-tight">
          {title}
        </h2>

        <p className="text-white text-5xl font-black mt-4">
          {value}
        </p>

      </div>

    </motion.div>
  );
}

export default DashboardCard;
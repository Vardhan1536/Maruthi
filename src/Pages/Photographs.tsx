import MasonryGrid from "../components/MasonaryGrid";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Photographs() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white px-10 py-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          className="border border-red-500 px-3 py-1 text-sm text-red-500"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <div className="text-sm">
          MY PAGE → <span className="text-red-500">@LAZYSHUTTR</span>
        </div>
      </div>

      {/* ✅ FAKE "TEXT TRANSITION" */}
      <motion.h1
        initial={{ x: 500, y: 200, scale: 1.2, opacity: 0 }}
        animate={{ x:0, y: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.8, 0, 0.6, 1],
        }}
        className="text-red-500 text-lg tracking-wide mb-6"
      >
        PHOTOGRAPHS
      </motion.h1>

      <MasonryGrid />
    </motion.section>
  );
}

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Others() {
  const navigate = useNavigate();
  const [transition, setTransition] = useState(false);

  const handleClick = () => {
    setTransition(true);

    setTimeout(() => {
      navigate("/photographs");
    }, 900); // match animation duration
  };

  const handleProjectsClick = () => {
    setTransition(true);

    setTimeout(() => {
      navigate("/projects");
    }, 900);
  };

  return (
    <section id="work">
      <div className="relative h-[98vh] w-full font-helvetica overflow-hidden">

      {/* Background */}
      <div className="h-1/2 w-full bg-[#E63946]" />
      <div className="h-1/2 w-full bg-[#F4F4F4]" />

      {/* 🔥 WHITE SLIDE-UP OVERLAY */}
      {transition && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0 bg-[#F4F4F4] z-10"
        />
      )}

      {/* CONTENT (TEXT) */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-900 z-20
          ${transition ? "opacity-100" : "opacity-100"}
        `}
      >
        <div className="relative font-bold text-[150px] leading-tight">

          <div className="absolute left-[50.7px] top-[calc(50%-53px)] h-[200px] w-[22.2px] bg-gradient-to-b from-[#F4F4F4] from-[26.31%] to-[#E63946] to-[26.31%]" />

          <motion.h1
            layout
            layoutId="projects-title"
            onClick={handleProjectsClick}
            className="text-[#F4F4F4] pl-10 cursor-pointer"
          >
            PROJECTS
          </motion.h1>

          <motion.h1
            layout
            layoutId="photographs-title"
            onClick={handleClick}
            className="pl-10 text-[#E63946] cursor-pointer"
          >
            <span>I</span>HOTOGRAPHS
          </motion.h1>

        </div>
      </div>
    </div>
    </section>
  );
}

export default Others;

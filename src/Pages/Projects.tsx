import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { projects } from "../data/projects";

  const projects = [
  {
    slug: "project-1",
    title: "Project Name",
    tags: ["UI/UX design", "Prototyping"],
    client: "Maruthi & Co.",
    duration: "6 Months",
    location: "Work from home",
    description: `
      sed nibh cursus felis, elementum scelerisque ex elit enim.
      commodo ad vitae ex. elit id Ut felis est. In amet, elit elit.
      vitae faucibus adipiscing dolor.Cras Quisque consectetur
      risus id sapien elementum venenatis in non nec scelerisque.
    `,
    images: [
      "/p1.jpg",
      "/p2.jpg",
      "/p3.jpg",
      "/p4.jpg",
    ],
  },

  {
    slug: "project-2",
    title: "Another Project",
    tags: ["Development"],
    client: "ABC Corp",
    duration: "3 Months",
    location: "Remote",
    description: "Another project description here...",
    images: ["/p2.jpg", "/p3.jpg"],
  },
];
// split lanes
const leftLane = projects.filter((_, i) => i % 2 === 0);
const rightLane = projects.filter((_, i) => i % 2 !== 0);

export default function Projects() {

  const navigate = useNavigate();

  return (
    <section className="h-screen w-full flex bg-[#E63946] overflow-hidden">

      {/* LEFT PANEL */}
      <div className="w-[45%] p-10 text-white relative">
        <button className="border border-white px-3 py-1 text-sm mb-10"  onClick={() => navigate("/")}>
          ← Back
        </button>

        <h1 className="text-8xl font-[400] tracking-wide">PROJECTS</h1>
        <div className="w-20 h-[2px] bg-white mt-4" />
      </div>

      {/* PROJECT LANES */}
      <div className="w-[55%] flex border-l border-white/40">

        {/* LEFT LANE — SCROLL UP */}
        <div className="w-1/2 overflow-hidden border-r border-white/40" >
          <motion.div
            className="flex flex-col h-[200%]"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...leftLane, ...leftLane].map((project, idx) => (
              <div
                key={idx}
                className="relative flex-1 cursor-pointer border-b border-white/40"
                onClick={() => navigate(`/projects/${project.slug}`)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <span className="absolute bottom-3 right-4 text-white text-sm">
                  {project.title}
                </span>

                <span className="absolute bottom-3 left-4 text-white/40 text-6xl font-light font-[600]">
                  {project.id}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT LANE — SCROLL DOWN */}
        <div className="w-1/2 overflow-hidden">
          <motion.div
            className="flex flex-col h-[200%]"
            animate={{ y: ["-50%", "0%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...rightLane, ...rightLane].map((project, idx) => (
              <div
                key={idx}
                className="relative flex-1 border-b cursor-pointer border-white/40"
                onClick={() => navigate(`/projects/${project.slug}`)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <span className="absolute bottom-3 left-4 text-white text-sm font-[400]">
                  {project.title}
                </span>

                <span className="absolute bottom-3 right-4 text-white/40 text-6xl font-light font-[600]">
                  {project.id}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

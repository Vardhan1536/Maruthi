import { useNavigate } from "react-router-dom";
import { LuMouse } from "react-icons/lu";


const projects = [
  { slug: "project-1", title: "Project Name", img: "/lz1.png" },
  { slug: "project-2", title: "Another Project", img: "/lz2.png" },
  { slug: "project-3", title: "Another Project", img: "/p3.jpg" },
  { slug: "project-4", title: "Another Project", img: "/p4.jpg" },
  { slug: "project-5", title: "Another Project", img: "/p2.jpg" },
  { slug: "project-6", title: "Another Project", img: "/p3.jpg" },
  { slug: "project-7", title: "Another Project", img: "/p4.jpg" },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full flex bg-[#E63946] font-helvetica">

      {/* LEFT PANEL */}
      <div className="w-[45%] p-10 text-white sticky top-0 h-screen">
        <button
          className="border border-white px-3 py-1 text-sm mb-10"
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              document
                .querySelector("#work")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 50);
          }}
        >
          ← Back
        </button>

        <h1 className="text-8xl font-[400] tracking-wide">PROJECTS</h1>
        <div className="w-20 h-[2px] bg-white mt-4" />
      </div>

      {/* PROJECT LIST */}
      <div className="w-[45%] border border-white/40 flex flex-col relative">
        {projects.map((project, index) => {
          const isTextLeft = index % 2 === 0;

          return (
            <div
              key={project.slug}
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="flex h-[260px] border-b border-white/40 cursor-pointer"
            >
              {/* TEXT LEFT */}
              {isTextLeft && (
                <div className="w-1/2 flex flex-col justify-between p-6 text-white">
                  {/* NUMBER — TOP LEFT */}
                  <span className="text-6xl font-light text-white/60 self-start">
                    {String(index + 1).padStart(2)}
                  </span>

                  {/* TITLE — BOTTOM RIGHT */}
                  <span className="text-sm self-end">{project.title}</span>
                </div>
              )}

              {/* IMAGE */}
              <div className="w-1/2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* TEXT RIGHT */}
              {!isTextLeft && (
                <div className="w-1/2 flex flex-col justify-between p-6 text-white text-right">
                  {/* NUMBER — TOP RIGHT */}
                  <span className="text-6xl font-light text-white/60 self-end">
                    {String(index + 1).padStart(2)}
                  </span>

                  {/* TITLE — BOTTOM LEFT */}
                  <span className="text-sm self-start font-[500]">{project.title}</span>
                </div>
              )}
            </div>
          );
        })}

        <div className="
  fixed
  top-[95%]          
  left-[42%]         
  -translate-y-1/2
  -translate-x-1/2
  text-white/80
  z-50
  pointer-events-none
">
          <LuMouse className="text-2xl animate-bounce" />
        </div>

      </div>
    </section>
  );
}

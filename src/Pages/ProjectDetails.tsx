import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

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

    // export default projects;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <div className="p-10">Project not found</div>;
    }

    return (
        <section className="min-h-screen bg-[#E63946] text-white">

            {/* TOP BAR (BACK BUTTON) */}
            <div className="px-10 py-6">
                <button
                    onClick={() => navigate(-1)}
                    className="border border-white px-3 py-1 text-sm"
                >
                    ← Back
                </button>
            </div>

            {/* HEADER */}
            <div className="px-10 py-32">
                {/* <button
                onClick={() => navigate(-1)}
                className="border border-white px-3 py-1 text-sm mb-8 mt-8 left"
            >
                ← Back
            </button> */}

                <h1 className="text-8xl leading-none font-bold uppercase">
                    {project.title}
                </h1>

                <div className="flex gap-3 mt-4">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="bg-white text-[#E63946] text-xl px-3 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* CONTENT */}
            <div className="bg-[#F4F4F4] text-black px-10 py-12">

                <div className="w-full h-[1.2px] bg-[#2E2E2E] mb-8 font"></div>

                {/* META */}
                <div className="grid grid-cols-3 gap-10 text-md mb-10">
                    <div>
                        <p className="text-red-500 font-semibold">CLIENT</p>
                        <p>{project.client}</p>
                    </div>

                    <div>
                        <p className="text-red-500 font-semibold">DURATION</p>
                        <p>{project.duration}</p>
                    </div>

                    <div>
                        <p className="text-red-500 font-semibold">LOCATION</p>
                        <p>{project.location}</p>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="grid grid-cols-[600px_1fr] gap-12 max-w-7xl mb-32">

                    {/* LEFT: TITLE */}
                    <p className="text-red-500 text-2xl font-bold uppercase">
                        DESCRIPTION
                    </p>

                    {/* RIGHT: CONTENT */}
                    <div className="text-sm leading-relaxed text-gray-700 space-y-6">
                        {project.description}
                    </div>

                </div>


                {/* IMAGE GRID */}
                <div className="grid grid-cols-2 gap-6">
                    {project.images.map((img, i) => (
                        <div
                            key={i}
                            className="h-[260px] border border-red-300"
                        >
                            <img
                                src={img}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button className="mt-8 bg-red-500 text-white px-6 py-2 text-sm">
                    View Project
                </button>
            </div>
        </section>
    );
}

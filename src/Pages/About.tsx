
function About() {
  const skills = [
    {
      name: "AI/ML",
      description: "LLM, Machine Learning, Deep Learning, Computer Vision"
    },
    {
      name: "Programming",
      description: "React, Next.js, Tailwind CSS, Node.js"
    },
    {
      name: "UI/UX",
      description: "Figma, Adobe XD, Prototyping, User Research"
    },
    {
      name: "WEB",
      description: "React Native, Flutter, Swift"
    },
  ];

  return (
    // Added an id for potential anchor linking from other pages
    <section id="about" className="font-helvetica">
      <div id="about" className="bg-white py-16 lg:py-20 px-4 sm:px-6 font-helvetica">
      <div className="max-w-7xl mx-auto">

        {/* --- Section 1: ABOUT ME & Skills --- */}
        {/* 
          - Mobile: Stacks vertically (flex-col) with a gap.
          - Large screens (lg): Switches to the original 2-column grid layout.
        */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 xl:gap-60">

          {/* Left Column: ABOUT ME */}
          {/*
            - Mobile: Text is centered for a stronger visual on a single column. Font size is reduced significantly.
            - Desktop (lg): Reverts to text-right and the original large font size.
          */}
          <div className="text-center lg:text-right leading-none">
            <h1 className="text-8xl lg:text-[140px] font-extralight text-[#2E2E2E]">ABOUT</h1>
            <h1 className="-mt-5 lg:-mt-9 text-8xl lg:text-[140px] font-extralight text-[#E63946]">ME</h1>
          </div>

          {/* Right Column: Skills */}
          {/*
            - Mobile: Items are centered. A top margin is added to create space from the "ABOUT ME" title.
            - Desktop (lg): Reverts to items-end (right-aligned).
          */}
          <div className="w-full mt-12 lg:mt-0">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[220px_1fr] gap-1 items-center
                 py-1 border-b border-[#2E2E2E]/60"
              >
                {/* LEFT COLUMN */}
                <p className="text-2xl font-bold text-red-500 uppercase italic">
                  {skill.name}
                </p>

                {/* RIGHT COLUMN */}
                <p className="text-lg opacity-[60%] text-right text-[#1E1E1E]">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>


          {/* --- Combined Education & Experience Section --- */}
          {/*
          - This container now holds both Education and Experience.
          - Mobile: Stacks vertically (flex-col).
          - Desktop (lg): Becomes a 2-column grid.
        */}
          <div className="mt-16 lg:mt-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-40">

            {/* --- Education Section --- */}
            <div className='mb-12 lg:mb-0'>
              {/* Title */}
              <div className="text-center lg:text-right">
                <div className="w-full h-px bg-[#2E2E2E]"></div>
                <h3 className="text-[#E63946] text-3xl font-bold mt-5">EDUCATION</h3>
              </div>
              {/* Details (Displayed below title on mobile, in the next column on desktop) */}
              {/* We hide this on desktop (lg:hidden) because its content is moved to the right column grid cell */}
              <div className="lg:hidden mt-5 text-center text-xl text-[#2E2E2E] leading-relaxed">
                <p className="font-bold">Computer Science Engineering</p>
                <p>Rajiv Gandhi University of Knowledge Technologies, 2023-2027</p>
              </div>
            </div>

            {/* Details for Education (Desktop Right Column) */}
            <div className="hidden lg:block text-right">
              <div className="w-full h-px bg-[#2E2E2E]"></div>
              <div className="mt-5 text-xl text-[#2E2E2E] leading-relaxed">
                <p className="font-bold">Computer Science Engineering</p>
                <p>Rajiv Gandhi University of Knowledge Technologies, 2023-2027</p>
              </div>
            </div>

            {/* --- Experience Section --- */}
            <div className='mt-0 lg:mt-10'>
              {/* Title */}
              <div className="text-center lg:text-right">
                <div className="w-full h-px bg-[#2E2E2E]"></div>
                <h3 className="text-[#E63946] text-3xl font-bold mt-5">EXPERIENCE</h3>
              </div>
              {/* Details (Displayed below title on mobile) */}
              <div className="lg:hidden mt-5 text-center text-xl text-[#2E2E2E] leading-relaxed">
                <p className="font-bold">UI/UX Designer</p>
                <p>Alumni Cell, Rajiv Gandhi University of Knowledge Technologies</p>
              </div>
            </div>

            {/* Details for Experience (Desktop Right Column) */}
            <div className="hidden lg:block lg:mt-10 text-right">
              <div className="w-full h-px bg-[#2E2E2E]"></div>
              <div className="mt-5 text-xl text-[#2E2E2E] leading-relaxed">
                <p className="font-bold">UI/UX Designer</p>
                <p>Alumni Cell, Rajiv Gandhi University of Knowledge Technologies</p>
              </div>
            </div>

          </div>

          {/* --- Bottom Divider --- */}
          {/*
          - On mobile, this will appear as a single full-width line at the very bottom.
          - On desktop, it restores the two-column divider look.
        */}
          <div className="mt-12 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-40">
            <div className="w-full h-px bg-[#2E2E2E]"></div>
            <div className="w-full h-px bg-[#2E2E2E] mt-12 lg:mt-0"></div>
          </div>

        </div>
      </div>
    </section>
      );
}

      export default About;
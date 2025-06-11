
function About() {
  const skills = [
    "UI/UX Designing",
    "Python",         
    "Machine Learning",
    "Data science",   
    "Photography",
  ];

  return (

    <div className="bg-white py-10 mb-12 px-2 sm:px-6 relative font-helvetica">
      
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 gap-x-40 items-center">

          {/* Left Column: ABOUT ME */}
          <div className="text-right leading-none">
            <h1 className="text-[140px] font-[200] text-[#2E2E2E]">ABOUT</h1>
            <h1 className="-mt-9 text-[140px] font-[200] text-[#E63946]">ME</h1>
          </div>

          {/* Right Column: Skills */}
          <div className="flex flex-col text-right items-end">
            {skills.map((skill) => (
              <div key={skill} className="mb-3">
                <p className="text-xl font-semibold text-[#2E2E2E]">{skill}</p>
                <div className="w-[450px] h-px bg-[#2E2E2E] mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Education */}
        <div className="grid grid-cols-2 gap-x-40 mt-8">

          {/* Left Column: EDUCATION Title */}
          <div className="text-right">
            <div className="w-full h-px bg-[#2E2E2E] ml-10"></div>
            <h3 className="text-[#E63946] text-3xl font-bold mt-5">EDUCATION</h3>
          </div>

          {/* Right Column: Education Details */}
          <div className="text-right">
            <div className="w-full h-px bg-[#2E2E2E] "></div>
            <div className="mt-5 text-xl text-[#2E2E2E] leading-relaxed">
              <p className="font-bold">Computer Science Engineering</p>
              <p>Rajiv Gandhi University of Knowledge</p>
              <p>Technologies, 2023-2027</p>
            </div>
          </div>
        </div>

        {/* Section 3: Experience */}
        <div className="grid grid-cols-2 gap-x-40 mt-10">

          {/* Left Column: EXPERIENCE Title */}
          <div className="text-right">
            <div className="w-full h-px bg-[#2E2E2E] ml-10"></div>
            <h3 className="text-[#E63946] text-3xl font-bold mt-5">EXPERIENCE</h3>
          </div>

          {/* Right Column: Experience Details */}
          <div className="text-right">
            <div className="w-full h-px bg-[#2E2E2E]"></div>
            <div className="mt-5 text-xl text-[#2E2E2E] leading-relaxed">
              <p className="font-bold">UI/UX Designer</p>
              <p>Alumni Cell, Rajiv Gandhi University of Knowledge</p>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="grid grid-cols-2 gap-x-40 mt-10">
            <div className="w-full h-px bg-[#2E2E2E] ml-10"></div>
            <div className="w-full h-px bg-[#2E2E2E]"></div>
        </div>

      </div>
    </div>
  );
}

export default About;
import Navbar from "../components/Navbar";
import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { FaArrowDown } from "react-icons/fa6";

function Home() {
    return (
        // Using overflow-x-hidden on the body can prevent horizontal scroll issues caused by large elements
        <div className="bg-white font-helvetica font-light overflow-x-hidden">
            <Navbar />

            {/* --- HERO HEADING --- */}
            {/* 
              - Mobile: Stacked text (flex-col), smaller font size (text-6xl).
              - Medium screens (md): Side-by-side (flex-row), larger font size (text-9xl).
              - Large screens (lg): Original very large font size restored.
            */}
            <div className="h-auto md:h-[30vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left text-6xl md:text-9xl lg:text-[140px] gap-2 md:gap-10 p-6 pt-10 md:pt-6">
                <div className="text-black font-bold">UI/UX</div>
                <div className="text-black">Designer</div>
            </div>

            {/* --- MAIN CONTENT SECTION (RED BACKGROUND) --- */}
            {/* 
              - Using min-height to ensure it has enough space on mobile where content stacks.
              - Added padding-bottom for spacing on mobile.
            */}
            <div className="relative bg-[#E63946] min-h-[88vh] lg:h-[80vh] w-full pt-20 lg:pt-0 pb-20 lg:pb-0">

                {/* --- PROFILE IMAGE --- */}
                {/* 
                  - Mobile: Smaller width (w-[22rem]), different top offset (top-[-6rem]) to look good.
                  - Tablet (md): A bit larger.
                  - Large screens (lg): Original large width and positioning restored.
                */}
                <div className="absolute top-[-6rem] md:top-[-7rem] lg:top-[-8.5rem] left-1/2 -translate-x-1/2 w-[22rem] h-auto md:w-[32rem] lg:w-[65rem] lg:h-[44rem]">
                    <img
                        src='/profile.png'
                        alt="Profile Pic"
                        className="w-full h-full object-cover object-top"
                    />
                    <a
                        href="#about"
                        className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 text-white text-sm cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <span className="text-[#E63946] italic">More about me</span>
                        <span className="border border-[#E63946] p-1">
                            <FaArrowDown color={'#E63946'} size={12} />
                        </span>
                    </a>
                </div>

                {/* --- TEXT CONTENT WRAPPER --- */}
                {/* 
                  - Mobile: Stacks vertically (flex-col), centered (items-center), with a gap.
                  - Large screens (lg): Becomes a row (flex-row) with space-between.
                  - Padding top (pt-[18rem]) on mobile pushes content below the absolutely positioned image. This padding is removed on larger screens (lg:pt-0) where the layout changes.
                */}
                <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-6 pt-[18rem] md:pt-[24rem] lg:pt-0">

                    {/* Left Text Block */}
                    {/* 
                      - Mobile: Centered text and button. No large top margin.
                      - Large screens (lg): Aligns left (items-start) and restores top margin.
                    */}
                    <div className="flex flex-col items-center lg:items-start lg:mt-[16rem]">
                        <div className="italic text-white text-3xl whitespace-nowrap">| G Maruthi Kumar</div>
                        <button className="bg-[#F4F4F4] p-4 mt-8 flex items-center gap-3 w-fit text-black hover:bg-opacity-90 transition-opacity">
                            My Resume <FaArrowRight />
                        </button>
                    </div>

                    {/* Right Text Block */}
                    {/* 
                      - Mobile: Centered text, smaller max-width (max-w-xs), large top margin to create space.
                      - Large screens (lg): Aligns right, restores original margins and width.
                    */}
                    <div className="max-w-xs flex flex-col items-center lg:items-end mt-16 lg:mt-[18rem]">
                        <div className="text-white text-lg text-center lg:text-right">
                            UI/UX designer shaping <br />clean, intuitive<br /> experiences with<br /> purpose and precision
                        </div>
                        {/* Social media buttons */}
                        <div className="mt-8 flex">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white text-white hover:bg-white/10 transition-colors duration-300">
                                <FaLinkedin size={22} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white text-white -ml-px hover:bg-white/10 transition-colors duration-300">
                                <FaGithub size={22} />
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white text-white -ml-px hover:bg-white/10 transition-colors duration-300">
                                <FaDribbble size={22} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
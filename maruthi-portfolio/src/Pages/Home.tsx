import Navbar from "../components/Navbar";
import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import profile from '../assets/profile.png';
import { FaArrowDown } from "react-icons/fa6";

function Home() {
    return (
 
        <div className="bg-white font-helvetica font-light">
            <Navbar />

            <div className="h-[30vh] flex items-center justify-center text-[140px] gap-10 p-6">
                <div className="text-black font-bold">UI/UX</div>
                <div className="text-black">Designer</div>
            </div>

            <div className="relative bg-[#E63946] h-[80vh] w-full">

                <div className="absolute top-[-8.5rem] left-1/2 -translate-x-1/2 w-[65rem] h-[44rem]">
                    <img
                        src={profile}
                        alt="Profile Pic"
                        className="w-full h-full object-cover object-top"
                    />
                    <a 
                        href="#about" // Add a link to your "about" section
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 text-white text-sm cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <span className="text-[#E63946] italic">More about me</span>
                        <span className="border border-[#E63946] p-1">
                            <FaArrowDown color={'#E63946'} size={12} />
                        </span>
                    </a>
                </div>

                <div className="relative z-20 h-full max-w-7xl mx-auto  flex justify-between">

                    {/* Left Text Block */}
                    <div className="flex flex-col mt-[16rem]">
                        <div className="italic text-white text-3xl whitespace-nowrap">| G Maruthi Kumar</div>
                        <button className="bg-[#F4F4F4] p-4 mt-8 flex items-center gap-3 w-fit">
                            My Resume <FaArrowRight />
                        </button>
                    </div>

                    {/* Right Text Block */}
                    <div className="max-w-[300px] flex flex-col items-end mt-[18rem]">
                        <div className="text-white text-lg text-right whitespace-nowrap">
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
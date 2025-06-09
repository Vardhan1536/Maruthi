// Home.tsx - Final Corrected Alignment

import Navbar from "../components/Navbar";
import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import profile from '../assets/profile.png';

function Home() {
    return (
        <div className="bg-white font-helvetica font-light overflow-hidden h-screen">
            <Navbar />

            {/* Container for the "UI/UX Designer" text */}
            {/* This div takes up 40% of the viewport height and perfectly centers its content */}
            <div className="h-[35vh] flex items-center justify-center text-[150px] gap-10 p-6">
                <div className="text-black font-bold">UI/UX</div>
                <div className="text-black">Designer</div>
            </div>

            {/* Red Section: Pulled up to overlap the text above */}
            {/* It takes up 60% of the viewport height and is positioned in front with z-10 */}
            <div className="relative z-10 bg-[#E63946] h-[60vh] w-full flex items-center justify-center">

                {/* Main 3-column wrapper */}
                <div className="flex items-center justify-between w-[95%] h-full">

                    {/* Left Text Block: Vertically centered with flexbox */}
                    <div className="p-4 flex flex-col justify-center flex-shrink-0 z-10">
                        <div className="italic text-white text-4xl whitespace-nowrap">| G Maruthi Kumar</div>
                        <button className="bg-[#F4F4F4] p-4 font-bold mt-8 flex text-lg items-center gap-2">
                            My Resume <FaArrowRight />
                        </button>
                    </div>

                    {/* Image Container: NO CHANGES MADE HERE */}
                    <div className="flex-1 h-full">
                        <img
                            src={profile}
                            alt="Profile Pic"
                            className="-mt-[10rem] -ml-[5vw] w-full h-[130%] object-cover object-top"
                        />
                    </div>

                    {/* Right Text Block: Vertically centered and right-aligned with flexbox */}
                    <div className="p-4 max-w-[300px] flex flex-col justify-center items-end flex-shrink-0">
                        <div className="text-white text-xl text-right whitespace-nowrap">
                            UI/UX designer shaping <br />clean, intuitive<br /> experiences with<br /> purpose and precision
                        </div>
                        {/* Social media buttons */}
                        <div className="mt-8 flex">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white text-white hover:bg-white/10 transition-colors duration-300">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white text-white -ml-px hover:bg-white/10 transition-colors duration-300">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white text-white -ml-px hover:bg-white/10 transition-colors duration-300">
                                <FaDribbble size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
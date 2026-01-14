import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

function Home() {
    return (
        <section id="home">
            <div className="bg-white font-helvetica font-light">

            <div className="h-auto md:h-[30vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left text-6xl md:text-9xl lg:text-[140px] gap-2 md:gap-10 p-6 pt-10 md:pt-6">
                <div className="text-black font-bold">UI/UX</div>
                <div className="text-black">Designer</div>
            </div>

            <div className="relative bg-[#E63946] min-h-[80vh] lg:h-[80vh] w-full pt-20 lg:pt-0 pb-20 lg:pb-0">

                <div className="absolute top-[-6rem] md:top-[-7rem] lg:top-[-8 rem] left-1/2 -translate-x-1/2 w-[22rem] h-auto md:w-[32rem] lg:w-[65rem] lg:h-[44rem]">
                    <img
                        src='/profile.png'
                        alt="Profile Pic"
                        className="w-full h-full object-cover object-top"
                    />
                    
                </div>

                <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-6 pt-[18rem] md:pt-[24rem] lg:pt-0">

                    <div className="flex flex-col items-center lg:items-start lg:mt-[16rem]">
                        <div className="text-white text-3xl whitespace-nowrap"><span>|</span> <span className='italic'>G Maruthi Kumar</span></div>
                        <button className="bg-[#F4F4F4] p-4 pt-2 pb-2 mt-8 flex items-center gap-3 w-fit text-black hover:bg-opacity-90 transition-opacity">
                            My Resume <FaArrowRight />
                        </button>
                    </div>

    
                    <div className="max-w-xs flex flex-col items-center lg:items-end mt-1 lg:mt-[14rem]">
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
        </section>
    );
}

export default Home;
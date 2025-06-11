

function Contact() {
    return (
        <div className="w-full h-[60vh] font-helvetica flex justify-center items-center bg-[#E63946]">

          <div className="grid grid-cols-2 gap-80">
              <div className="grid grid-cols-[auto_1fr] gap-x-12 items-baseline text-[#FFFFFF]">
                <p className="text-sm font-semibold tracking-wider uppercase">
                    CONTACT
                </p>

                <div className="text-4xl font-light space-y-6">
                    <p>xyz@gmail.com</p>
                    <p>+91 8790790392</p>
                </div>


                <p className="text-sm font-semibold tracking-wider uppercase">
                    SOCIAL
                </p>

                <div className="flex gap-8 text-sm font-semibold tracking-wider uppercase">
                    <a href="#" className="hover:underline">LINKEDIN</a>
                    <a href="#" className="hover:underline">TWITTER</a>
                    <a href="#" className="hover:underline">INSTAGRAM</a>
                </div>

            </div>

            <div className="text-white text-[100px] text-left flex flex-col ml-[80px] leading-none">
                <span>I'm</span>
                <span>open</span>
                <span>to work</span>
            </div>

          </div>
        </div>
    );
}

export default Contact;
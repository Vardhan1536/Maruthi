

function Contact() {
    return (
        <section id="contact">

          {/* // Use min-height to allow the container to grow on mobile if content wraps.
        // Add padding for spacing on small screens. */}
        <div className="w-full min-h-[60vh] font-helvetica flex justify-center items-center bg-[#E63946] py-16 px-4 sm:px-6">

          {/* 
            - Mobile: A single-column flex layout with a vertical gap.
            - Desktop (lg): Switches to the original 2-column grid.
            - The gap is responsive: vertical on mobile, horizontal on desktop.
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-16 lg:gap-x-20 xl:gap-80">

              {/* --- Left Column: Contact & Social --- */}
              {/*
                - Mobile: A single-column grid, with centered items and text.
                - Desktop (lg): Restores the [auto_1fr] grid, baseline alignment, and left-aligned text.
              */}
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-y-4 lg:gap-x-12 items-center lg:items-baseline text-white text-center lg:text-left">
                
                <p className="text-sm font-semibold tracking-wider uppercase">
                    CONTACT
                </p>

                {/* Font size is responsive now. */}
                <div className="text-3xl lg:text-4xl font-light space-y-4 lg:space-y-6">
                    <p>xyz@gmail.com</p>
                    <p>+91 8790790392</p>
                </div>

                {/* Add a spacer for mobile view to separate sections clearly */}
                <div className="h-8 lg:hidden"></div>

                <p className="text-sm font-semibold tracking-wider uppercase">
                    SOCIAL
                </p>

                {/* 
                  - Mobile: Links stack vertically for readability.
                  - Small screens (sm): They can go side-by-side.
                  - Use flex-wrap to handle cases where they might still overflow.
                */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-sm font-semibold tracking-wider uppercase">
                    <a href="#" className="hover:underline">LINKEDIN</a>
                    <a href="#" className="hover:underline">TWITTER</a>
                    <a href="#" className="hover:underline">INSTAGRAM</a>
                </div>

            </div>

            {/* --- Right Column: Large Text --- */}
            {/* 
              - Font size scales up with screen size.
              - Text is centered on mobile and left-aligned on desktop.
              - The fixed margin `ml-[80px]` is removed in favor of the grid gap.
            */}
            <div className="text-white text-6xl md:text-8xl lg:text-[100px] text-center lg:text-left leading-none">
                <span>I'm</span><br/>
                <span>open</span><br/>
                <span>to work</span>
            </div>

          </div>
        </div>
          </section>
    );
}

export default Contact; 
// import React from 'react';

function Others() {
  return (
    <div className="relative h-[98vh] w-full font-helvetica overflow-hidden">
      
      {/* 1. Background Sections */}
      <div className="h-1/2 w-full bg-[#E63946]"></div>
      <div className="h-1/2 w-full bg-[##F4F4F4]"></div>

      {/* 2. Centering Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* 3. Text & Bar Container */}
        {/* This container is 'relative' to position the bar inside it. */}
        <div className="relative font-bold text-[150px] leading-tight">
          
          {/* THE MODIFIED BAR: The height is now much smaller (h-[45px]) */}
          {/* It still has the two-tone gradient and is centered on the divide. */}
  <div className="absolute left-[51px] top-[calc(50%-45px)] h-[190px] w-[22px] bg-gradient-to-b from-white from-[26.31%] to-[#E63946] to-[26.31%]"></div>          {/* The text is padded left to make room for the bar */}
          <h1 className="text-[#F4F4F4] pl-10">
            PROJECTS
          </h1>
          
          {/* Negative margin pulls the text up. */}
          <h1 className="text-[#E63946] pl-10 mt-[16]">
            IHOTOGRAPHS
          </h1>
        </div>
      </div>
      
    </div>
  );
}

export default Others;
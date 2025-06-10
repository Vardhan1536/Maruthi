function Navbar() {
  return (
    <div className="bg-white border-b border-black w-full">
      <nav className="flex justify-center items-center p-6 ">
        <div className="flex space-x-10 text-black text-lg gap-60">
          <a href="/" className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Home</a>
          <a href="/" className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="/" className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Logo</a>
          <a href="/" className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Work</a>
          <a href="/" className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

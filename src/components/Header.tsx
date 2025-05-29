import * as React from "react";
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 min-w-screen fixed z-10 backdrop-blur-2xl ">
      {/* Logo Section */}
      <div className="text-4xl font-bold w-3xs p-1 flex justify-center">
        <img src="./Frame 19.png" alt="Logo" className="w-14" />
      </div>

      {/* Navigation Links */}
      <div className="w-2xl flex justify-evenly items-center text-xl font-thin">
        <a href="#about" className="hover:text-gray-400 text-white font-light">About Us</a>
        <a href="#waitlist" className="hover:text-gray-400 text-white font-light">Waitlist</a>
        <a href="#cart" className="hover:text-gray-400 text-white font-light">Cart</a>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Buy</button>
      </div>
    </nav>
  );
};

export default Navbar;
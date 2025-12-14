import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav>
            <div className='font-extrabold text-2xl mx-40 max-sm:mx-34  mt-6 float-left  ' >

                <Link to='/' >SkyShot</Link>
            </div>
          <div className="absolute md:hidden top-5 right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="   p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Hamburger Icon */}
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

            <div className='flex mx-14 mt-6  gap-10  text-[16px]  float-right max-sm:hidden' >
                <Link to="/" className=' px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] '>Home</Link>
                <Link to="/about" className=' px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] ' >About</Link>
                <Link to="/contact" className=' px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] ' >Contact</Link>
                <Link to="/book" className=' px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] '>Book Now</Link>
                <Link to="/register" className=' px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] '>Register</Link>
            </div>

        
        {isMobileMenuOpen && (
        <div className=" absolute mt-16 rounded-2xl right-4 md:hidden bg-black border z-60 border-gray-200"> 
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to='/about' className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-yellow-500 hover:bg-gray-50">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-yellow-500 hover:bg-gray-50">Contact</Link>
            <Link to="/book" className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-yellow-500 hover:bg-gray-50">Book</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-yellow-500 hover:bg-gray-50">Home</Link>
            <Link to="/register" className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-yellow-500 hover:bg-gray-50">register</Link>
          </div>
        </div>
        
      )}
      </nav>
        
    )
}

export default Navbar
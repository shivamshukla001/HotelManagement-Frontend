import { FaSwimmer,FaUmbrellaBeach, FaWifi } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <h1 className="absolute top-[37%] text-6xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:text-5xl max-sm:top-[40%] max-sm:text-[#EEE8AA] ">Stay Above Expectations</h1>
      <div className="flex justify-between w-full ">
        <img className=" max-sm:hidden mt-4 w-[33.33%] h-[400px] object-cover" src="/homepagebanner1.jpg" alt="" />
        <img className=" max-sm:hidden mt-4 w-[33.33%] h-[400px]  object-cover" src="/banner.jpeg" alt="" />
        <img className=" max-sm:w-full
         mt-4 w-[33.33%] h-[400px]  object-cover" src="/homepagebanner3.jpg" alt="" />
      </div>
      <Link to='/book' className='absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 border border-yellow-200 rounded-md hover:text-black hover:bg-[#E5E6BE] max-sm:top-[50%] max-sm:text-black max-sm:font-bold max-sm:bg-[#E5E6BE] max-sm:hover:bg-[#e1e1b6] ' >Book Now</Link>



      <h1 className="text-4xl text-center mt-6 justify-center max-sm:text-2xl ">What We Offer</h1>


      {/* Cards */}
      <div className="flex justify-center flex-wrap mt-2 gap-4 max-sm-flex-nowrap ">
      <div className=" max-sm:w-48 max-sm:h-54  max-w-60 rounded-xl bg-[#E5E6BE] overflow-hidden shadow-lg border border-gray-200 p-6 m-4  text-center">
        <div className=" text-black flex text-4xl items-center justify-center ">
          <FaSwimmer />
        </div>
        <h2 className="max-sm:text-lg  font-bold text-xl text-black mb-2">Swiming Pool</h2>
        <p className="max-sm:text-sm max-sm:mt-2  text-gray-700 text-base ">“The crystal-clear swimming pool at Skyshot was the perfect place to relax and unwind after a long day.”</p>
      </div>
      <div className="max-sm:w-48 max-sm:h-54  max-w-60  rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6 m-4 bg-[#E5E6BE] text-center">
        <div className=" flex text-4xl text-black items-center justify-center ">
          <IoRestaurant />
        </div>
        <h2 className=" max-sm:text-lg font-bold text-black text-xl mb-2">Restaurant Pool</h2>
        <p className="max-sm:text-sm text-gray-700 text-base">“The restaurant served delicious meals with amazing ambiance, making every dining moment special.”</p>
      </div>
      <div className=" max-sm:hidden max-sm:w-48 max-sm:h-54 max-w-60  rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-[#E5E6BE] p-6 m-4  text-center">
        <div className=" flex text-4xl text-black items-center justify-center ">
         <FaWifi />
        </div>
        <h2 className="max-sm:text-lg font-bold text-xl text-black mb-2">Free Wifi</h2>
        <p className="max-sm:text-sm text-gray-700 text-base">“The free high-speed Wi-Fi kept me connected throughout my stay without any interruptions”</p>
      </div>
      <div className=" max-sm:hidden max-sm:w-48 max-sm:h-54 max-w-60  rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6 m-4 bg-[#E5E6BE] text-center">
        <div className=" flex text-4xl text-black items-center justify-center ">
          <MdCleaningServices />
        </div>
        <h2 className="max-sm:text-lg  font-bold text-black text-xl mb-2">Room Service</h2>
        <p className="max-sm:text-sm text-gray-700 text-base">“The room service was quick, professional, and made my stay feel truly luxurious.”</p>
      </div>
      <div className="max-sm:w-48 max-sm:h-54 max-w-60 rounded-xl overflow-hidden shadow-lg border border-gray-200 p-6 m-4 bg-[#E5E6BE]  text-center">
        <div className=" flex text-4xl text-black items-center justify-center ">
          <FaUmbrellaBeach />
        </div>
        <h2 className="max-sm:text-lg font-bold text-xl text-black mb-2">Beach View</h2>
        <p className="max-sm:text-sm text-gray-700 text-base">“Waking up to the breathtaking beach view every morning was an unforgettable experience.”</p>
      </div>
    </div>
    </div>

  )
}

export default Banner
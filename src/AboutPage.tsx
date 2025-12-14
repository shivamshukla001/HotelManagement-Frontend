



const AboutPage = () => {
  return (
  
    <main>
    <div className="flex absolute md:top-20 md:left-40 mt-3 ">
      <div className="  text-xl leading-loose ">
         {/* For mobile devices */}
        {/* <h1 className="md:hidden absolute max-sm:text-center max-sm:text-2xl font-bold max:sm:mr-60  max-sm:truncate max-sm:top-20 max-sm:left-20 ">About Our Hotels</h1> */}
        <p className="md:hidden z-60  max-sm:absolute  max-sm:top-50 max-sm:left-50 max-sm:text-2xl italic truncate text-amber-200 transform -translate-x-1/2 -translate-y-1/2">Welcome to SkyShot Hotels</p>
        {/* FOr large devices */}
        <h1 className=" max-sm:text-2xl  text-5xl font-bold mb-4 max-sm:hidden">About Our Hotels</h1>
        <p className="max-sm:hidden" >Welcome to SkyShot Hotels, where luxury meets comfort.</p>
        <p className="max-sm:hidden" > Our hotels are designed to provide an unforgettable experience</p>
        <p className="max-sm:hidden"> Whether you're traveling for business or leisure</p>
        <p className="max-sm:hidden"> we offer top-notch amenities and exceptional service</p>
      </div>
      <div className="ml-30 mr-40 rounded-lg overflow-hidden shadow-lg max-sm:hidden">
        <img className="w-[600px] h-[350px]" src="/aboutbanner.jpg" alt="" />
      </div>
      {/* for mobile device */}
      <div className="fixed mt-20 shadow-lg md:hidden">
        <img className=" w-[400px] h-[250px] rounded-2xl " src="/aboutbanner.jpg" alt="" />
      </div>
    </div>
  
      <h1 className=" absolute text-center text-4xl ml-150  mt-120 max-sm:hidden">What Our Guest Say</h1>
      {/* FOr mobile device */}
      <h1 className=" max-sm:absolute text-center text-2xl ml-20  mt-96 md:hidden ">What Our Guest Say</h1>

      {/* Testimonials */}
      {/* for mobile device */}
      <div className=" mx-6 flex absolute mt-116 md:hidden border-t-2 rounded-2xl gap-2">
        <img className="w-10 h-10 rounded-full mt-4 left-4" src="/person-1.jpg" alt="" />
        <p className=" mt-2 ml-2">"Amazing experience! The staff were friendly and the rooms were spotless. Will definitely come back!"</p>
      </div>
      <div className="mx-6 flex absolute mt-144 md:hidden border-t-2 rounded-2xl gap-2">
        <img className="w-10 h-10 rounded-full mt-4" src="/person-2.jpg" alt="" />
        <p className="mt-2 ml-2 ">"The location was perfect, and the amenities exceeded my expectations. Highly recommend SkyShot Hotels!"</p>
      </div>
      <div className="mx-6 flex absolute mt-172  md:hidden border-t-2 rounded-2xl gap-2 ">
        <img className="w-10 h-10 rounded-full mt-4" src="/person-2.jpg" alt="" />
        <p className="mt-2 ml-2 mb-20 ">"The location was perfect, and the amenities exceeded my expectations. Highly recommend SkyShot Hotels!"</p>
      </div>

    {/* for large devices */}
      <div className=" flex absolute mt-135 ml-40 max-sm:hidden">
        <img className="w-20 h-20 rounded-full" src="/person-1.jpg" alt="" />
        <p className=" mt-6 ml-2 text-xl">"Amazing experience! The staff were friendly and the rooms were spotless. Will definitely come back!"</p>
      </div>
      <div className=" flex absolute mt-160 ml-40 max-sm:hidden">
        <img className="w-20 h-20 rounded-full" src="/person-2.jpg" alt="" />
        <p className="mt-6 ml-2 text-xl">"The location was perfect, and the amenities exceeded my expectations. Highly recommend SkyShot Hotels!"</p>
      </div>
       <div className=" flex absolute mt-185 ml-40 max-sm:hidden">
        <img className="w-20 h-20 rounded-full" src="/person-1.jpg" alt="" />
        <p className=" mt-6 ml-2 text-xl">"Amazing experience! The staff were friendly and the rooms were spotless. Will definitely come back!"</p>
      </div>
      <div className=" flex absolute mt-210 ml-40 max-sm:hidden">
        <img className="w-20 h-20 rounded-full" src="/person-2.jpg" alt="" />
        <p className="mt-6 ml-2 text-xl">"The location was perfect, and the amenities exceeded my expectations. Highly recommend SkyShot Hotels!"</p>
      </div>



   
      
    </main>
    
  )
}

export default AboutPage
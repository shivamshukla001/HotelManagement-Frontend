

const Contactpage = () => {
  return (
   <>
    <div className='max-sm:hidden'>
        <h1 className="absolute text-4xl  mb-4  mt-30 ml-40">Contact Us</h1> 
        <p className="absolute  mb-4 mt-45 ml-40">Please Fill out the Form below</p>

        <form className="absolute flex flex-col mt-60 ml-40">
          <label className="mb-2 " htmlFor="name">Name:</label>
          <input className="border border-gray-300 rounded-md p-2 mb-4 w-96" type="text" id="name" name="name" />

          <label className="mb-2" htmlFor="email">Email:</label>
          <input className="border border-gray-300 rounded-md p-2 mb-4 w-96" type="email" id="email" name="email" />

          <label className="mb-2" htmlFor="message">Message:</label>  
          <textarea className="border border-gray-300 rounded-md p-2 mb-4 max-w-96 resize-none" id="message" name="message" rows={4}></textarea>

          
        </form>
        <button className=" absolute flex ml-40 mt-150  border  border-amber-200 text-white py-2 px-2 rounded-md" type="submit">Submit</button>
    </div>
    

       
    <div className='md:hidden'>
        <h1 className="absolute text-3xl  mb-4  mt-30 ml-2 ">Contact Us</h1> 
        <p className="absolute  mb-4 mt-45 ml-2">Please Fill out the Form below</p>

        <form className="absolute flex flex-col mt-60 ml-4">
          <label className="mb-2 " htmlFor="name">Name:</label>
          <input className="border border-gray-300 rounded-md p-2 mb-4 w-86" type="text" id="name" name="name" />

          <label className="mb-2" htmlFor="email">Email:</label>
          <input className="border border-gray-300 rounded-md p-2 mb-4 w-86" type="email" id="email" name="email" />

          <label className="mb-2" htmlFor="message">Message:</label>  
          <textarea className="border border-gray-300 rounded-md p-2 mb-4 max-w-86 resize-none" id="message" name="message" rows={4}></textarea>

          
        </form>
        <button className=" absolute flex ml-40 mt-150  border  border-amber-200 text-white py-2 px-2 rounded-md" type="submit">Submit</button>
    </div>
    
    </>
  )
}

export default Contactpage
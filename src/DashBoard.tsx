import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaChild,FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';
const DashBoard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getAllInfo() {
            const response = await axios.get('https://hotel-management-backend-1-kcjn.onrender.com/api/v1/getAllInfo');
            setData(response.data)
        }
        getAllInfo();
    }, [])
    return (
        <>
        {/* For large devices */}
        <div className=' max-sm:hidden flex flex-col justify-center items-center '>
            <nav className=' flex justify-center mt-8  text-2xl text-center gap-6'>
                <h1 className=' border-b border-b-amber-300'> Dashboard</h1>
                <Link to='/' className=' border-b border-b-amber-300'> Home </Link>

            </nav>
            {data.map((item: any, index) => (
                <div className='grid grid-cols-2 gap-6 m-10 border-2 max-w-[800px] p-[20px_20px] list-none rounded-xl ' key={index}>

                    <h2>Full_Name: {item.full_name}</h2>
                    {/* <h2>User_id: {item._id}</h2> */}
                    <h2>Check-in-Date: {item.check_in_date}</h2>
                    <h2>Check-out-Date: {item.check_out_date}</h2>
                    <div className='flex gap-1.5'>
                    <FaChild/>
                    <h2 className=' rounded-xl  text-pink-400 max-w-28'>Children: {item.children}</h2>
                    </div>
                    <div className='flex gap-2 '>
                    <FaUserFriends className='text-teal-400 mt-1'/>
                    <h2>No. Of Guest: {item.number_of_guest}</h2>

                    </div>
                    <Link to={`/getAllInfo/${item._id}`} className=' px-2 py-2 border border-yellow-200 rounded-xl bg-amber-200 text-black max-w-30 font-bold'>More Details.</Link>
                </div>

            ))}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> // For debugging */}

        </div>


        {/* for small device */}
        <div className=' md:hidden grid justify-center items-center '>
            <nav className=' flex justify-center mt-8  text-2xl text-center gap-6'>
                <h1 className=' border-b border-b-amber-300'> Dashboard</h1>
                <Link to='/' className=' border-b border-b-amber-300'> Home </Link>

            </nav>
            {data.map((item: any, index) => (
                <div className='grid gap-6 m-10 border-2 max-w-[400px] p-[20px_20px] list-none rounded-xl text-center hover:shadow-xl hover:shadow-pink-500 ' key={index}>

                    <h2>Name: {item.full_name}</h2>
                    {/* <h2>User_id: {item._id}</h2> */}
                    <h2>CID: {item.check_in_date}</h2>
                    <h2>COD: {item.check_out_date}</h2>
                    <div className='flex gap-1.5  text-center ml-16'>
                    <FaChild/>
                    <h2 className=' rounded-xl  text-pink-400 max-w-28'>Children: {item.children}</h2>
                    </div>
                    <div className='flex gap-2 ml-12 '>
                    <FaUserFriends className='text-teal-400 mt-1'/>
                    <h2>No. Of Guest: {item.number_of_guest}</h2>

                    </div>
                    <Link to={`/getAllInfo/${item._id}`} className=' px-2 py-2 border border-yellow-200 rounded-xl bg-amber-200 text-black max-w-30 ml-14 font-bold'>More Details.</Link>
                </div>

            ))}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> // For debugging */}

        </div>
        </>
    )
}

export default DashBoard
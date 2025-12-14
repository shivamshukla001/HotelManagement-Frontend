import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AllInfo = () => {
    const [allData, setAllData] = useState(null)  
    const { id } = useParams()  

    useEffect(() => {
        async function getAllInfo() {
            try {
                
                const response = await axios.get(`http://localhost:8000/api/v1/getAllInfo/${id}`);
                setAllData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        
        if (id) {  
            getAllInfo()
        }
    }, [id])

    return (
      <>
      {/* FOr large devices */}
        <div className=' max-sm:hidden flex flex-col justify-center items-center text-xl leading-6  border-b-2 border-t-2   max-w-[800px] p-[20px_20px] list-none rounded-xl  mt-10 ml-86 hover:shadow-2xl hover:shadow-yellow-200'>
            {/* <h1>User ID: {id}</h1>   */}
            <h1>User Details</h1>
            {allData ? (
                <pre>{JSON.stringify(allData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div> 

        {/* For small devices */}
         <div className=' md:hidden absolute flex flex-col justify-center items-center max-w-[400px] p-[10px_10px] list-none rounded-xl  mt-10 max-sm:ml-20 '>
            {/* <h1>User ID: {id}</h1>   */}
            <h1 className='flex justify-center items-center mr-40 text-3xl mb-6'>User Details</h1>
            {allData ? (
                <pre>{JSON.stringify(allData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div> 
      </>
    )
}

export default AllInfo

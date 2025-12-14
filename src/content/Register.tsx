
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            const response = await fetch('http://localhost:8000/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
             navigate('/dashboard')
            console.log('Success:', result.name, result.email);
           
        } catch (error) {
            console.error('Error:', error);
        }
    };
     const onSubmit2 = async (data: any) => {
        // console.log(data);
        try {
            const response = await fetch('http://localhost:8000/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
        
            navigate('/dashboard')
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
        
        {/* // for small devices */}
        <div className=' md:hidden absolute border-2 border-amber-200 mt-36 left-4 rounded-2xl '>
            <h1 className=' flex mt-10 ml-30 text-2xl '>Register Form</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex  flex-col p-10 gap-8  '>
            <div className='flex flex-col'>
              
                <input type="text" placeholder='Enter Your Name' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("name", { required: true })} />
                {errors.name && <span>name is required </span>}
                
            </div>

            <div className='flex flex-col'>
               
                <input type="email" placeholder='Enter Your Email' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Email is required and must be valid</span>}
               
            </div>
     

            <div className='flex flex-col'>
                
                <input type="password" className='mx-4 border rounded-lg p-2.5 w-[250px] ' placeholder='Enter Your Password' {...register("password", { required: true, minLength: 8 })} />
                {errors.password && <span>Password is required and must be at least 8 characters</span>}
                
            </div>

            <button type="submit" className='border rounded-lg p-2'>Submit</button>
        </form>
        <div className=' flex justify-center text-center gap-4 mb-2'>
            <p>Already Have a Account ?</p><Link to={'/login'} className='text-blue-600 underline'>Login</Link>
        </div>

        </div>
        
         {/* For large device */}
         <div className=' max-sm:hidden absolute border-2 border-amber-200 mt-36 left-150 rounded-2xl '>
            <h1 className=' flex mt-10 ml-30 text-2xl '>Register Form</h1>
        
        <form onSubmit={handleSubmit(onSubmit2)} className='flex  flex-col p-10 gap-8  '>
            <div className='flex flex-col'>
              
                <input type="text" placeholder='Enter Your Name' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("name", { required: true })} />
                {errors.name && <span>name is required </span>}
                
            </div>

            <div className='flex flex-col'>
               
                <input type="email" placeholder='Enter Your Email' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Email is required and must be valid</span>}
               
            </div>
     

            <div className='flex flex-col'>
                
                <input type="password" className='mx-4 border rounded-lg p-2.5 w-[250px] ' placeholder='Enter Your Password' {...register("password", { required: true, minLength: 8 })} />
                {errors.password && <span>Password is required and must be at least 8 characters</span>}
                
            </div>

            <button type="submit" className='border rounded-lg p-2'>Submit</button>
        </form>
        <div className=' flex justify-center text-center gap-4 mb-2'>
            <p>Already Have a Account ?</p><Link to={'/login'} className='text-blue-600 underline'>Login</Link>
        </div>

        </div>

        


        </>

        
    )
}

export default Register

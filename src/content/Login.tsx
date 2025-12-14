
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            const response = await fetch('https://hotel-management-backend-1-kcjn.onrender.com/api/v1/login', {
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
            navigate('/home')
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
        

         {/* // for small devices */}
                <div className=' md:hidden absolute border-2 border-amber-200 mt-36 left-4 rounded-2xl '>
                    <h1 className=' flex mt-10 ml-30 text-2xl '>Login Form</h1>
                
                <form onSubmit={handleSubmit(onSubmit)} className='flex  flex-col p-10 gap-8  '>
                    {/* Input fields */}
                    {/* <div className='flex flex-col'>
                        {/* <label htmlFor="name">Name:</label> */}
                        {/* <input type="text" placeholder='Enter Your Name' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("name", { required: true })} /> */}
                        {/* {errors.name && <span>name is required </span>} */}
                        
                    {/* </div>  */}
        
                    <div className='flex flex-col'>
                        {/* <label htmlFor="email"> Email: </label> */}
                        <input type="email" placeholder='Enter Your Email' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <span>Email is required and must be valid</span>}
                       
                    </div>
             
        
                    <div className='flex flex-col'>
                        {/* <label htmlFor="password">Password:</label> */}
                        <input type="password" className='mx-4 border rounded-lg p-2.5 w-[250px] ' placeholder='Enter Your Password' {...register("password", { required: true, minLength: 8 })} />
                        {errors.password && <span>Password is required and must be at least 8 characters</span>}
                        
                    </div>
                    {/* For registration, add confirm password */}
                    {/* <input type="password" {...register("confirmPassword", { required: true, validate: (value) => value === watch("password") || "Passwords do not match" })} /> */}
                    {/* {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} */}
        
                    <button type="submit" className='border rounded-lg p-2'>Submit</button>
                </form>
                <div className=' flex justify-center text-center gap-4 mb-2'>
                    <p>Don't Have Any Account?</p><Link to={'/'} className='text-blue-600 underline'>Register</Link>
                </div>
        
                </div>


                {/* For large devoce */}
                <div className='absolute  border-2 border-amber-200 mt-36 ml-150 rounded-2xl '>
            <h1 className=' flex mt-10 ml-24 text-4xl '>Login Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex  flex-col p-10 gap-8  '>
                {/* Input fields */}
                {/* <div className='flex flex-col'>
                    {/* <label htmlFor="name">Name:</label> */}
                    {/* <input type="text" placeholder='Enter Your Name' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("name", { required: true })} /> */}
                    {/* {errors.name && <span>name is required </span>} */}

                {/* </div>    */} 

                <div className='flex flex-col'>
                    {/* <label htmlFor="email"> Email: </label> */}
                    <input type="email" placeholder='Enter Your Email' className='border mx-4 rounded-lg p-2.5 w-[250px]' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span>Email is required and must be valid</span>}

                </div>


                <div className='flex flex-col'>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" className='mx-4 border rounded-lg p-2.5 w-[250px] ' placeholder='Enter Your Password' {...register("password", { required: true, minLength: 8 })} />
                    {errors.password && <span>Password is required and must be at least 8 characters</span>}

                </div>
                {/* For registration, add confirm password */}
                {/* <input type="password" {...register("confirmPassword", { required: true, validate: (value) => value === watch("password") || "Passwords do not match" })} /> */}
                {/* {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} */}

                <button type="submit" className='border rounded-lg p-2'>Submit</button>
            </form>
            <div className=' flex justify-center text-center gap-4 mb-2'>
                <p>Don't Have any Account ?</p><Link to={'/'} className='text-blue-600 underline'>Register</Link>
            </div>

        </div>
                    </>
    )
}

export default Login

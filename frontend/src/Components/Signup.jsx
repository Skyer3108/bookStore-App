import { Link, useLocation, useNavigate } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {

    const location=useLocation()
  const navigate=useNavigate()
    const from=location.state?.from?.pathname||'/'

    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            password:data.password
        };

       
    try {
        const res = await axios.post("https://book-store-backend-paz7.onrender.com/user/signup", userInfo);
  
        if (res.data && res.data.status !== 400) {
          toast.success("Signup Successfully");
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        } else {
          throw new Error(res.data.message || "Signup failed");
        }
      } catch (err) {
        toast.error("Error: " + (err.response?.data?.message || err.message));
      }
      }

    return (

        <div className="flex h-screen items-center justify-center ">

            <div  className="w-[600px]" >
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                       <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</button></Link> 
                   
                    <h3 className="font-bold text-lg">Signup</h3>

                    <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br />
                        <input type='text' placeholder="Enter Your Name" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("name", { required: true })} />
                        <br/>
                        {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type='email' placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <br />

                        <input type='password' placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })}  />

                        <br/>
                        {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                    </div>

                    <div className="flex justify-around mt-4">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration:200">Signup</button>
                        <p className="text-xl">Have account ? <button className="underline text-blue-500 cursor-pointer" onClick={()=>{document.getElementById('my_modal_3').showModal()}}  >Login</button> <Login/> </p>
                    </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup

import toast from "react-hot-toast"
import { useAuth } from "../Context/AuthProvider"



const Logout = () => {

    const [auth, setAuth] = useAuth()

    const handelLogout = () => {

        try{

            setAuth({
                ...auth,
                user:null
            })
    
            localStorage.removeItem('user')

            toast.success('Logout Sucessfully')

        
           
            setTimeout(()=>{

                window.location.reload()
    
            },2000)

           

        } catch(err){

            toast.error('Error: '+err.message)

            setTimeout(()=>{

            },2000)
        
        }
    }
   


    return (
        <div>
            <button className="px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer" onClick={handelLogout}>Logout</button>
        </div>
    )
}
export default Logout
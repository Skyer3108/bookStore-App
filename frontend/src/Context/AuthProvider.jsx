
import { createContext, useContext, useState } from "react"

export const AuthContext=createContext()
export default function AuthProvider({children}){

    const userAuth=localStorage.getItem('user')
    const [auth,setAuth]=useState(() => {
        try {
          return userAuth ? JSON.parse(userAuth) : null;
        } catch (error) {
          console.error("Error parsing user data:", error);
          return null;
        }
      })

    return(
       <AuthContext.Provider value={[auth,setAuth]}>

        {children}

       </AuthContext.Provider>
    )

}
export const useAuth=()=>useContext(AuthContext)
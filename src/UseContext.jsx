import { createContext,useState } from "react";
export const UserContext = createContext({})

export function UserContextProvider({children}){
    const[user,setUser]=useState(null)

    const userLogged = (data) =>{
        setUser(data)

    }

    const userLoggedOut = () =>{
        setUser(null)
        
    }
    return(
        <UserContext.Provider value={{user,userLogged,userLoggedOut}}>
            {children}
        </UserContext.Provider>    )
}
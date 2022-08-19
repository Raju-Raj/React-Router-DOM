import {  createContext,useContext, useState } from "react";

const context = createContext(null)


export const Authenticate = ({children}) => {
    const [user,setUser] = useState(null)
    const login = (user) => {
        setUser(user)
    }
    const logout = (user) => {
        setUser(null)
    }
    return(
        <context.Provider value={{user,login,logout}}>
            {children}
        </context.Provider>
    )
}

export const useAuth = () => {
    return useContext(context)
}
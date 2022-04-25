import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) =>
{
    const [user , setUser] = useState({})

    useEffect( async () => 
    {
    var res = await fetch("http://localhost:8080/employee")
    var data = await res.json()
    setUser(data)
    },[])

    
    return <DataContext.Provider value={ {user} }>{children}</DataContext.Provider>
}
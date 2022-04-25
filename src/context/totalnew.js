import { createContext, useState } from "react";


export const NewUserContext = createContext()

export const NewUser = ({children}) =>
{
    const [ resnew , setResnew] = useState(0)

    const added = () =>
    {
        
        setResnew(resnew + 1)
        console.log(resnew)
    }

    return <NewUserContext.Provider value={ { resnew , added} }>{children}</NewUserContext.Provider>
}


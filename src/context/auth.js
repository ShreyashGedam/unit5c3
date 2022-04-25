import { createContext, useState } from "react";

export const AuthContext = createContext()

export const Auth = ({children}) =>
{
    const [resauth , setResauth] = useState(true)

    const changeauth = () =>
    {
        setResauth(!resauth)
    }

    return (
        <AuthContext.Provider value={ {resauth , changeauth}}>{children}</AuthContext.Provider>
    )
}
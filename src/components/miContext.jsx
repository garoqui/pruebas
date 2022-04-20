import { react,  createContext } from 'react'

export const MiContext=  createContext()

export const MiContextProvider = ({children})=>{
    return(
        <MiContext.Provider value="Hola desde el providers">
            {children}
        </MiContext.Provider>
    )
}

export default MiContextProvider
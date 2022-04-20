import { useContext } from "react"
import {MiContext} from "./miContext"

const MiObserver = ()=>{
    const msg = useContext( MiContext)

    return(<div>
        {msg}
    </div>)
}

export default MiObserver
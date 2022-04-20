import { useContext } from "react"
import {MiContext} from "./miContext"

const MiObserver2 = ()=>{

    const msj = useContext(MiContext)
    return(<div>
        {msj}
    </div>)


}

export default MiObserver2
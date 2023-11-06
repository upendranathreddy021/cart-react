import { useNavigate } from "react-router-dom"
import './csscomp/Homenav.css'
let Homenav=()=>{
let navigate=useNavigate()

    let Backfun=()=>{
navigate("/")
    }

 
    return(
        <div className="homenav">
            <button onClick={Backfun}>Back</button>
        </div>
    )
}
export default Homenav
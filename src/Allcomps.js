
import {useNavigate} from 'react-router-dom';
import Smartphones from "./Smartphones"
import Category from './Category';
let Allcomps=()=>{

    

let listcat=["smartphones","laptops","fragrances","skincare","groceries","home-decoration"]
// let func=[smartphones(),laptops(),frangrances(),skincare(),groceries(),home_decoration()]
// let smartphones=()=>{

// }
// let laptops=()=>{

// }
// let frangrances=()=>{

// }
// let skincare=()=>{

// }
// let groceries=()=>{

// }

// let home_decoration=()=>{

// }


    return(
        <div className="catall">
            
            <Category/>
               
                   
                
         
        </div>
    )
}
export default Allcomps
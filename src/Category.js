import { useState } from "react"

import './csscomp/Category.css'
import Smartphones from "./Smartphones";
import {Link} from 'react-router-dom'
import Skincare from "./Skincare";


let Category=()=>{

    return(
        <div className="catall">
<Link to="/Smartphones">Smartphones</Link>
<Link to="/Skincare">Skincare</Link>
<Link to="/Groceries">Groceries</Link>
<Link to="/Laptops">Laptops</Link>
<Link to="/Frangrances">Frangrances</Link>
<Link to="/Home_decoration">Home-decoration</Link>
        </div>
    )
}
export default Category
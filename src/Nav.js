import {Link} from 'react-router-dom'
import './csscomp/Nav.css';
import Search from './Search';
import Gc from './Gc'
import { useContext,useState } from 'react';
import Schcont from './SchCont';


let Nav=()=>{
    let [datasch,setdatasch]=useState("")
    let fun=(e)=>{
    setdatasch(e.target.value)
    }
 
    return(
        
        <nav className='navbar'>
            <div className='logo'>
            <img src='https://www.brandbucket.com/sites/default/files/logo_uploads/337719/large_circlecart.png' alt='logo img'/>
            </div>
            <Link to="/">Home</Link>
            <div className='search'>
            <Schcont.Provider value={datasch}>
            <input type="text" id="search" onChange={fun}/>
            </Schcont.Provider>
            </div>
            <Link to="/cart"><i className="fa-solid fa-cart-plus" style={{color: "yellow"}}>
                </i> &nbsp; Cart</Link>
            <Link to="/Login">Login</Link>

        </nav>
       
    )
}
export default Nav
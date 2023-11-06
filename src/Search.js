import React,{useState} from 'react'
import Home from './Home'

let Search=()=>{
   let [data,setdata]=useState("")
let fun=(e)=>{
setdata(e.target.value)
}
    return(
        

    <div>
       
        <input type="text" id="search" onChange={fun}/></div>
)

}
export default Search;
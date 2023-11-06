import './csscomp/Curosal2.css'
import React,{useState} from 'react'
let Curosal2=(props)=>{

let [ind,setind]=useState(0)
let aimg=props.sent;

let frwd=()=>{
    if(ind==aimg.length-1){
        ind=0
    }
setind(ind+1)
}
let bcwd=()=>{
    if(ind==0){
        ind=aimg.length-1
    }
    setind(ind-1)
}

    return(
        <div>
<div className="imgdiv">
<img src={aimg[ind]} alt="imgind"/>
</div>
<i className="fa-solid fa-arrow-right fa-beat fa-2xl" onClick={frwd} style={{color:"black" }}></i>
<i className="fa-solid fa-arrow-right fa-rotate-180 fa-2xl" onClick={bcwd} style={{color:"black" }}></i>
</div>
    )
}
export default Curosal2;
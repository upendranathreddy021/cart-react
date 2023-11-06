import './csscomp/Curosal.css'
import {useEffect,useState} from 'react'
let Curosal=(props)=>{
    
    let arr=props.icon
    
    let [i,setI]=useState(0)
let fun=()=>{
setI((i)=>(i+1)%arr.length)
}
useEffect(()=>{
    let id=setInterval(fun,1000)
    return ()=>clearInterval(id)

},[])
return(
    <div className='cur'>
<img src={arr[i]} alt='any'/>

    </div>
)
}
export default Curosal;
import {useState,useEffect} from 'react';
import Gc from './G                                                                                                                                                            c';
let Resize=()=>{

const [wsize,setwsize]=useState([
    window.innerWidth,window.innerHeight
])

useEffect(()=>{
    const hadlesize=()=>{
        setwsize([window.innerWidth,window.innerHeight])
    }
    window.addEventListener('resize',hadlesize);
    return()=>{
        window.removeEventListener('resize' ,hadlesize)
    }
},[])
return(
    <Gc.Provider value={{"width":wsize[0]}}>

   </Gc.Provider>
)

}
export default Resize;
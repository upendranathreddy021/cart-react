import { useEffect,useState,useContext } from "react";
import Datacontext from './Datacontext';
import axios from 'axios'
import Curosal from './Curosal'
import Rating from './Rating.js';
import Gc from "./Gc";
import './Home.css'
import './csscomp/Smartphones.css'
import Homenav from "./Homenav";
let Fragrances=()=>{
    let gobj=useContext(Gc)
    let [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(
            (res)=>{
                
                setdata(res.data.products)
            }
        ).catch((err)=>{
            console.log("error occured")
        })
    },[])

return(
    <div className="allitem">
        {
            data.map((item,index)=>{
                if(item.category=="fragrances"){
                
                   return(
                    <div className='item' key={index}>
                    <div className='imgcon'>
                      

                          
                        <Curosal icon={item.images}/>
                       
                       
                        </div>
                        <div className='content'>
                        <div className='title'>{item.title}</div>
                        <div className='descn'>{item.description}</div>
                        <div className='price'><span><i class="fa-solid fa-indian-rupee-sign" style={{color: 'black'}}></i> 
                        &nbsp;<del>{Math.round(parseInt(item.price)
                        +(parseInt(item.price)*parseInt(item.discountPercentage)/100))}</del>
                        </span> &nbsp;<span>{item.price}</span><span className='rate'><Rating rate={item.rating}/></span></div>
                      
                        <div>{item.category}</div>
                <button onClick={()=>gobj.addcart(item)}>add cart</button>
                </div></div>
                   )
                }
            })
        }
<Homenav/>
    </div>
)
}
export default Fragrances;
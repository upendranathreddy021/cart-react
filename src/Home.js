import {useContext, useEffect, useState} from 'react'
import Curosal from './Curosal';
import axios from 'axios'
import './Home.css'
import Gc from './Gc'
import Rating from './Rating.js'
import Banner from './Banner';
import Login from './Login.js'
import Product from './Products'
import Schcont from './SchCont';
import Category from './Category';
import Smartphones from './Smartphones';
import Datacontext from './Datacontext';
import Allcomp from './Allcomps'
let Home =(props)=>{


    let [data,setdata]=useState([])
    let gobj=useContext(Gc)
    

    let [catdata,setcatdata]=useState([])

   
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
    
        <div className='totalmain'>
            <div className='cate'>
                 <Allcomp/>
            

            </div>
            <div className='baner'>
              
                <Banner/>
            </div>
            
        
        <div className='prodcon'>
            
            {
                data.map((item,index)=>{
                  

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
                })   
            }
        </div>

        </div>
    )
}
export default Home;


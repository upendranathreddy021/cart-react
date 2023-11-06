import {useContext} from 'react'
import Gc from './Gc'
import Curosal from './Curosal';
let Cart =()=>{
    let gobj=useContext(Gc)
  
    return(
        <div className='prodcon'>
            {
                gobj.cart.map((item,index)=>{
                    return(
                        <div className='item' key={index}>
                            <div className='imgcon'>
                                <Curosal icon={item.images}/>
                                </div>
                            
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                            <div><span><i className="fa-solid fa-indian-rupee-sign" style={{color: 'black'}}></i> 
                                &nbsp;<del>{Math.round(parseInt(item.price)+(parseInt(item.price)*parseInt(item.discountPercentage)/100))}</del>
                                </span> &nbsp;{item.price}</div>
                            <div>
                                <button onClick={()=>gobj.inc(index)}>-</button>
                            {item.qty}<button onClick={()=>gobj.inc(index)}>+</button>
                            </div>
                            <div>{item.total}</div>
                            <button onClick={()=>gobj.del(index)}>delete</button>
                            </div>
                    )
                })
            }
            {gobj.cart.length>0 && <div>cart:total:{gobj.gt}</div>}
        </div>
    )
}
export default Cart;
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Cart from './Cart';
import {useState} from 'react'
import Login from './Login'
import Curosal from './Curosal';
import Gc from './Gc'
import Smartphones from './Smartphones';
import Skincare from './Skincare';
import Groceries from './Groceries';
import Laptops from './Laptops';
import Fragrances from './Fragrances';
import Home_decoration from './Home_decoration';

let App=()=>{
  let [cart,setcart] =useState([])
  let [gt,setgt]=useState(0)
  let navigate=useNavigate()
  

  let addcart =(item)=>{
    let x=cart.filter((prod)=>prod.id==item.id)

    if (x.length==0){
      setcart([...cart,{...item,"qty":1,"total":item.price}])
      setgt(gt+item.price)}
      else if (x[0].qty<10){
        setcart(
          cart.map((prod)=>{
          if (prod.id==item.id)
          {
            setgt(gt+item.price)
            return{...prod,"qty":prod.qty+1,"total":prod.total+prod.price}
          }
        else{
            return prod
          }

        }))
      }
      navigate("/cart")
  }
let dec=(index)=>{
  if (cart[index].qty>1){
    cart[index].qty-=1
    setgt(gt-cart[index].price)
    cart[index].total-=cart[index].price
    setcart([...cart])
  }
}

let inc=(index)=>{
  if(cart[index].qty<10){
    cart[index].qty+=1
    cart[index].total+=cart[index].price
    setcart([...cart])
  }
}

let del=(index)=>{
  setgt(gt-cart[index].total)
  cart.splice(index,1)
  setcart([...cart])
}
let gobj={"cart":cart,"addcart":addcart,"dec":dec,"inc":inc,"del":del,"gt":gt}

return(
  <div>
    
    <Gc.Provider value={gobj}>
    
      <Nav  />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/Smartphones" element={<Smartphones/>}/>
     
        <Route path="/Skincare" element={<Skincare/>}/>
        <Route path="/Groceries" element={<Groceries/>}/>
        <Route path='/Laptops' element={<Laptops/>}/>
        <Route path="/Frangrances" element={<Fragrances/>}/>
        <Route path='/Home_decoration' element={<Home_decoration/>}/>
      </Routes> 
    </Gc.Provider>
   
  </div>
)
  }
export default App
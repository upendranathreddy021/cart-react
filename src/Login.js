import {useState} from 'react'
import './csscomp/Login.css';

let Login=()=>{
let [login,setlogin]=useState(true)
let [sign,setsign]=useState(false)



let loginf=()=>{
setlogin(!login)
setsign(!setsign)

}

let signf=()=>{
  setlogin(!login)
  setsign(!setsign)
}
let emailf=(email)=>{
let emailvfy=/^[A-Z0-9._]+@[a-z0-9]+\.[a-z]{2,}$/i
var emailver=emailvfy.test(email)
console.log(emailver)


}



  return(
    <div className='all'>
      <div className='body'>
       <div className='btns'> <button onClick={loginf} style={!login ?({"background":"khaki"}):({"background":'red',"boxShadow":"-3px 3px 3px 1px black"})} >Login &nbsp; 
       <i class="fa-solid fa-arrow-down fa-bounce"  style={login ?({"color": "black","visibility":"visible"}):({"visibility":"hidden"})}></i></button>
       <button  onClick={signf} style={!login ?({"background":"red","boxShadow":"3px 3px 3px 1px black"}):({"background":'khaki'})} >Signup &nbsp; <i class="fa-solid fa-arrow-down fa-bounce"  style={!login ?({"color": "black","visibility":"visible"}):({"visibility":"hidden"})}></i></button></div>
        <div className='login' style={login ?({"display":"block"}):({"display":'none'})} >
    
      <div className='emaillogin' >
        <p>Email</p>
        <input type='email' placeholder='Email'/>
      </div>
      <div className='pwdlogin'>
        <p>Password</p>
        <input type='password' placeholder='password'/>
      </div>
      <button>Login</button>
      <div>


      </div>
        </div>
        <div className='signup' style={login ?({"display":"none"}):({"display":'block'})} >
    
        <form>
        <div className='namesign'>
            <p>Full Name</p>
    <input type='text' placeholder='user name' onChange={emailf()} />
        </div>
        <div>
          <p>Email</p>
          <input type='email' placeholder='email'/>
        </div>
      <div>
        <p>Contact</p>
        <input type='text' placeholder='contact'/>
      </div>
        <div>
          <p>Create password</p>
          <input type='password' placeholder='password'/>
        </div>
        <div>
          <div className='cbox'><input type='checkbox'/> <p>accept terms & conditions</p></div> </div>
        <button>Register</button>
        </form>
        </div>
        
      </div>
    </div>
  )

}
export default Login
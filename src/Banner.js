import './csscomp/Banner.css'
import Curosal2 from './Curosal2';
let arrimg=["https://img.freepik.com/free-photo/shopping-trolleys-packets-gift-tags_23-2147961963.jpg?w=826&t=st=1692358488~exp=1692359088~hmac=38168ff67e204f96902400078020dcb8ef4f8caeba3e1f02e4433f525a12f0e3","https://img.freepik.com/free-photo/black-friday-sales-concept_23-2147695929.jpg?size=626&ext=jpg&ga=GA1.2.552825761.1685937664&semt=ais",
"https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074074.jpg?size=626&ext=jpg&ga=GA1.2.552825761.1685937664&semt=ais","https://th.bing.com/th/id/OIP.hgRUiz2ahjeRhtZJF-fRqQHaE7?w=297&h=198&c=7&r=0&o=5&pid=1.7","https://i.pinimg.com/originals/ac/ab/86/acab864750cd6d4ff4323267a04743b2.jpg","https://img.freepik.com/free-photo/christmas-gift-boxes-various-colors-placed-shopping-cart_1150-19244.jpg?size=626&ext=jpg&ga=GA1.2.552825761.1685937664&semt=ais",
"https://img.freepik.com/free-photo/shopping-trolleys-packet-gift-with-bow_23-2147961972.jpg?size=626&ext=jpg&ga=GA1.2.552825761.1685937664&semt=ais","https://static.vecteezy.com/system/resources/previews/000/669/977/original/shopping-online-summer-banner-vector.jpg"]

let Banner=()=>{


    return(
        <div className="banner">
            <div className="ban1">

            </div>
            <div className="ban2">
            <Curosal2 sent={arrimg}/>
            </div>
        </div>

    )
}
export default Banner;
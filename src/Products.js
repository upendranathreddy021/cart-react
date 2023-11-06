import {useState,useEffect} from 'react';
import axios from 'axios';

let Produts=()=>{

let [Item,setItem]=useState([])

useEffect(()=>{
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((res)=>{
        setItem(res.Item.drinks)
    }).catch((err)=>{
        console.log(err)
    })
},[])



return(
    <div>
        {
            Item.map((it,index)=>{

                return(
                    <div>{it.strDrinkThumb}
                    <p>{it.idDrink}</p></div>
                )
            })
        }
    </div>

)

}
export default Produts
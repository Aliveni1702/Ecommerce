import { useEffect, useState } from 'react';
import axios from 'axios';

import Item from '../items/item';
import './main.css';

const Main = ()=>{
    // const [oldData, setOldData] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=>{
           setBestSeller(bestSeller.data.data)
           
        }).catch((e)=>{
            console.log(e);

        })
    },[])
    return(
        <div className='shop'>
       
      
        <div className="shopTitle">
        <h1>Xbox Games</h1>
        </div>
       
      <div className='products'>
            
            {bestSeller.map((item, key)=>{
               return <Item item= {item.attributes}/>
               
            })}
        </div>

      
       
        </div>
    )
}
export default Main;


import { useContext} from 'react';
import { CartContext } from '../../context/cart-context';
import './item.css';

const Item = ({item})=>{
    const {addCartData} = useContext(CartContext)
    return(
       
     

            <div id='card'>
                {/* <div className='img'> */}
                    <img className='card-img' src={`http://localhost:1337${item?.Image?.data?.attributes?.url}`}  alt={item.Title}/>
                {/* </div> */}

                <div className='content'>

                   <p className='card-title'>{item.Title}</p>
                    <p className='card-des'>{item.Description}</p>
                    <p className='price'>Price: &#x20b9;{item.Price}</p>
                       
                </div>
              
                          
            <button className='add-button' onClick={()=>{addCartData(item)}}>Add To Cart</button>
                
            </div>
      
      
    )
}

export default Item;
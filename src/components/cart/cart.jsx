import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
// import { Navigate } from 'react-router-dom';
import './cart.css'

const Cart =()=>{
    const {cartData, getTotalCartAmount} = useContext(CartContext);
    const totalAmount = getTotalCartAmount();
   
console.log(totalAmount);
    // const navigate = Navigate();
    // const total = useRef();
  
    return(
             
         <div className='head'>
            <section>
            {cartData.map((cartItem)=>{
            return(
                <div className='main'>
                <article className='card'>
                 <img className='img' src={`http://localhost:1337${cartItem?.Image?.data?.attributes?.url}`}  alt={cartItem.Title}/>
                <article className='des'>{cartItem.Title}</article>
                <article className='des'>Price: &#x20b9;{cartItem.Price}</article>
               
                </article>
                 <button >Remove from cart</button>
                 </div>
            )
          
            })}          
            </section>
       
        

            <section>
                <article>Billing Information</article>

                
                {cartData.map((cart)=>{
                  // let total= 0;
                  // for(let i in cart){
                  //   console.log(cart[i].Price);
                 
                  // }
                  let total =0;
                  for(let i in cart){
                   if(i === "Price"){
                    console.log(cart.Price);
                      total = total +cart.Price;
                   }
                   
                   
                  }
                 
                    // total.current.Price = total.current.Price + cart.Price;
                    return <article>
                     
                     
                        <span>{total}</span>
                    </article>

                    
                      
                    
                })}
                
            </section>

        </div>
              
           
       
       
    )
}

export default Cart;
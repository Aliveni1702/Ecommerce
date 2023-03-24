import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';
import { ShoppingCart, ShoppingBag, GameController } from "phosphor-react";
import './header.css';

const Header=()=>{
    const {cartData} = useContext(CartContext);
    const navigate = useNavigate()
    return(
        <>
        <nav className='navBar'>
            <section className='logo' onClick={()=>{navigate('/')}}> <GameController size={80}/></section>
            <div className="links">
            <section className='shopping-bag'    onClick={()=>{navigate('/')}}><ShoppingBag size={50}/></section>
            <section className='cart-icon'   onClick={()=>{navigate('/cart')}}>
                
                <ShoppingCart size={50} />
            </section>
            </div>
        </nav>
        </>
    )
}

export default Header;
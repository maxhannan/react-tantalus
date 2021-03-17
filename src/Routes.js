import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Landing from './Components/Pages/Landing';
import Lifestyle from './Components/Pages/Lifestyle';
import Mens from './Components/Pages/Mens';
import Navbar from './Components/Navbar/Navbar';
import Sale from './Components/Pages/Sale';
import Womens from './Components/Pages/Womens';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

const Routes = () => {
  const [cart, setCart] = useState([])
 
  const handleAddToCart = (item) => {
    const itemInCart = cart.filter(
      cartItem => cartItem.product.id === item.product.id
    )
    if(itemInCart.length){
      setCart(cart.map(cartItem => {
        if(cartItem.product.id === item.product.id){
          cartItem.qty += item.qty
        }
        return cartItem
      }))
    }else{
      setCart([...cart, item])
    }
  }
  
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = '/react-tantalus' component = {Landing}></Route>
        <Route exact path = '/react-tantalus/men'>
          <Mens handleAddToCart = {handleAddToCart}/>
        </Route>
        <Route exact path = '/react-tantalus/women' >
          <Womens handleAddToCart = {handleAddToCart}/>
        </Route>
        <Route exact path = '/react-tantalus/home'>
          <Home handleAddToCart = {handleAddToCart}/>
        </Route>
        <Route exact path = '/react-tantalus/lifestyle'>
          <Lifestyle handleAddToCart = {handleAddToCart}/>
        </Route>
        <Route exact path = '/react-tantalus/sale'>
          <Sale handleAddToCart = {handleAddToCart}/>
        </Route>
        <Route exact path = '/react-tantalus/cart' component = {Cart}></Route>
      </Switch>
    </BrowserRouter>
   );
}
 
export default Routes;
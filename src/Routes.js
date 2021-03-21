import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage";
import ProductGrid from "./Components/ProductGrid";
import Cart from "./Components/Cart";
import DetailsPage from './Components/DetailsPage/DetailsPage';
import { useState } from 'react';
import { productArray } from './ProductArray'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  paddingDiv: {
    height: '10vh',
    "@media (max-width: 1000px)":{
      height: '8vh',
    },
    "@media (max-width: 600px)":{
      height: '7vh',
    },
  }
}))

const Routes = () => {
  const [cart, setCart] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const classes  = useStyles()

  const getProductById = (id) => productArray.find(product => product.id === id)

  const handleOpenDetails = (id) => {
    setActiveProduct(getProductById(id));
  }

  const handleAddToCart = (id, newQty = 1) => {
    const newProduct = getProductById(id)

    if(cart.find(cartItem => cartItem.id === id)){
      setCart(cart => cart.map(cartItem => {
        if(cartItem.id === id) return {...cartItem, qty: cartItem.qty + newQty}
        return cartItem
      }))
      return
    }
    setCart([...cart, {...newProduct, qty: 1}])
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const getCartSize = () => ( 
    cart.map(cartItem => cartItem.qty).reduce(reducer,0)
  )

  const getCartTotal = () => (
    cart.map(cartItem => (cartItem.price * cartItem.qty)).reduce(reducer,0)
  )

  return (
    <BrowserRouter>
      <Nav getCartSize = {getCartSize} />
      {/* Padding Div, to keep content under nav */}
      <div className = {classes.paddingDiv}></div>
      <Switch>
        <Route exact path = '/react-tantalus/'>
          <HomePage/>
        </Route>
        <Route exact path = '/react-tantalus/newArrivals'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'new'/>
        </Route>
        <Route exact path = '/react-tantalus/men'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'men'/>
        </Route>
        <Route exact path = '/react-tantalus/women'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'women'/>
        </Route>
        <Route exact path = '/react-tantalus/home'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'home'/>
        </Route>
        <Route exact path = '/react-tantalus/lifestyle'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'lifestyle'/>
        </Route>
        <Route exact path = '/react-tantalus/sale'>
          <ProductGrid 
          handleOpenDetails = {handleOpenDetails}
          section = 'sale'/>
        </Route>
        <Route exact path = '/react-tantalus/details'>
          <DetailsPage 
            product = {activeProduct}
            handleAddToCart = {handleAddToCart}
          />
        </Route>
        <Route exact path = '/react-tantalus/cart'>
          <Cart 
            cart = {cart} 
            getCartTotal = {getCartTotal}
            getCartSize = {getCartSize}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

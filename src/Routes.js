
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage";
import ProductGrid from "./Components/ProductGrid";
import Cart from "./Components/Cart";
import DetailsPage from './Components/DetailsPage';
import { useState } from 'react';
import {productArray} from './ProductArray'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(() => ({
  paddingDiv: {
    height: '10vh',
    "@media (max-width: 1000px)":{
      height: '8vh',
    },
  }
}))
const Routes = () => {
  // const [cart, setCart] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const classes  = useStyles()
  const handleOpenDetails = (id) => {
    const newProduct = productArray.find(product => product.id === id)
    console.log(newProduct)
    setActiveProduct(newProduct)
  }
  return (
    <BrowserRouter>
      <Nav/>
      {/* Padding Div, to keep content under nav */}
      <div className = {classes.paddingDiv}></div>
      <Switch>
        <Route exact path = '/react-tantalus/'>
          <HomePage/>
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
          />
        </Route>
        <Route exact path = '/react-tantalus/cart'>
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

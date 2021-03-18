
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage";
import ProductGrid from "./Components/ProductGrid";
import Cart from "./Components/Cart";
import DetailsPage from './Components/DetailsPage';
// import { useState } from 'react';

const Routes = () => {
  // const [cart, setCart] = useState([]);
  // const [activeProduct, setActiveProduct] = useState({});
  
  return (
    <BrowserRouter>
      <Nav/>
      {/* Padding Div, to keep content under nav */}
      <div style = {{height: '10vh'}}></div>
      <Switch>
        <Route exact path = '/react-tantalus/'>
          <HomePage/>
        </Route>
        <Route exact path = '/react-tantalus/men'>
          <ProductGrid section = 'men'/>
        </Route>
        <Route exact path = '/react-tantalus/women'>
          <ProductGrid section = 'women'/>
        </Route>
        <Route exact path = '/react-tantalus/home'>
          <ProductGrid section = 'home'/>
        </Route>
        <Route exact path = '/react-tantalus/lifestyle'>
          <ProductGrid section = 'lifestyle'/>
        </Route>
        <Route exact path = '/react-tantalus/sale'>
          <ProductGrid section = 'sale'/>
        </Route>
        <Route exact path = '/react-tantalus/details'>
          <DetailsPage />
        </Route>
        <Route exact path = '/react-tantalus/cart'>
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

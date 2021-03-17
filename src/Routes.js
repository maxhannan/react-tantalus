import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Landing from './Components/Pages/Landing';
import Lifestyle from './Components/Pages/Lifestyle';
import Mens from './Components/Pages/Mens';
import Navbar from './Components/Navbar/Navbar';
import Sale from './Components/Pages/Sale';
import Womens from './Components/Pages/Womens';
import Cart from './Components/Cart/Cart';

const Routes = () => {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = '/react-tantalus' component = {Landing}/>
        <Route exact path = '/react-tantalus/men' component = {Mens}/>
        <Route exact path = '/react-tantalus/women' component = {Womens}/>
        <Route exact path = '/react-tantalus/home' component = {Home}/>
        <Route exact path = '/react-tantalus/lifestyle' component = {Lifestyle}/>
        <Route exact path = '/react-tantalus/sale' component = {Sale}/>
        <Route exact path = '/react-tantalus/cart' component = {Cart}/>
      </Switch>
    </BrowserRouter>
   );
}
 
export default Routes;
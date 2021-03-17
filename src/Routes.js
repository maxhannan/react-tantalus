import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Landing from './Components/Pages/Landing';
import Lifestyle from './Components/Pages/Lifestyle';
import Mens from './Components/Pages/Mens';
import Navbar from './Components/Navbar/Navbar';
import Sale from './Components/Pages/Sale';
import Womens from './Components/Pages/Womens';

const Routes = () => {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route exact path = '/men' component = {Mens}/>
        <Route exact path = '/women' component = {Womens}/>
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/lifestyle' component = {Lifestyle}/>
        <Route exact path = '/sale' component = {Sale}/>
      </Switch>
    </BrowserRouter>
   );
}
 
export default Routes;
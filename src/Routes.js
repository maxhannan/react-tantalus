import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Landing from './Components/Landing';
import Lifestyle from './Components/Lifestyle';
import Mens from './Components/Mens';
import Navbar from './Components/Navbar';
import Sale from './Components/Sale';
import Womens from './Components/Womens';

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
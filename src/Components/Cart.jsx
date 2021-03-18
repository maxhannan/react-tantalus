import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Cart = () => {

  return ( 
    <Button component = {RouterLink} to = '/details' variant = 'outlined'>
      Open Details
    </Button>
   
   );
}
 
export default Cart;
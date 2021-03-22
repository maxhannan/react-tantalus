import { Container, Grid, Fab, makeStyles, Button} from "@material-ui/core";
import CartItem from "./CartItem";
import { MdShoppingCart } from 'react-icons/md'
import { Type } from "./StyledComponents";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: '1rem', 
    marginBottom: '1rem'
  },
  grid: {
    animation: 'fadeIn 500ms ease-in-out', 
    marginBottom: '100px'
  },
  coBtnContainer: {
    position: 'fixed', 
    bottom: '30px', 
    right: '30px', 
    transform: 'scale(1.2)',
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Cart = ({cart, getCartTotal, getCartSize, handleCartDelete, handleCartUpdate}) => {
  const classes = useStyles()
  return ( 
    <Container maxWidth = 'lg'>
      <Type variant = 'h4'  className = {classes.heading}>
        Your Cart ({getCartSize()})
      </Type> 
      { getCartSize() === 0 && 
      <Button color = 'secondary' component = {RouterLink} to = '/react-tantalus/newArrivals'>
        Go Shopping!
      </Button>
      }
      <Grid container spacing={2} className = {classes.grid}>
        {cart.map(cartItem => (
          <CartItem 
            key = {cartItem.id} 
            handleCartDelete = {handleCartDelete} 
            handleCartUpdate = {handleCartUpdate} 
            product = {cartItem} 
          />
        ))}
      </Grid>
      { getCartSize() > 0 && 
        <div className={classes.coBtnContainer}>
          <Fab variant="extended" color = 'secondary' size = 'large'>
            <MdShoppingCart className={classes.extendedIcon} />
            <Type variant = 'subtitle1'>${getCartTotal()}</Type>
          </Fab>
        </div>
      }
    </Container>
   );
}
 
export default Cart;
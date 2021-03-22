import { Container, Typography, Grid, Button, Fab, makeStyles} from "@material-ui/core";
import CartItem from "./CartItem";
import {MdShoppingCart } from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Cart = ({cart, getCartTotal, getCartSize, handleCartDelete, handleCartUpdate}) => {
  const classes = useStyles()
  return ( 

    <Container maxWidth = 'lg'>
    <Typography variant = 'h4'  style = {{fontFamily: "'Montserrat', sans-serif", fontWeight: '500', marginTop: '1rem', marginBottom: '1rem'}} >
      Your Cart ({getCartSize()})
    </Typography>
    <Grid container spacing={2} style = {{animation: 'fadeIn 500ms ease-in-out', marginBottom: '100px'}}>
      {cart.map(cartItem => (
        <CartItem handleCartUpdate = {handleCartUpdate} handleCartDelete = {handleCartDelete} key = {cartItem.id} product = {cartItem} />
      ))}
      {/* <h1>Total: ${getCartTotal()}</h1> */}
    </Grid>
    <div style = {{
      position: 'fixed', 
      bottom: '30px', 
      right: '30px', 
      transform: 'scale(1.2)'
      }} 
      className={classes.root}
    >
     { getCartSize() > 0 && 
      <Fab variant="extended" color = 'secondary' size = 'large'>
        <Typography style = {{fontFamily: "'Montserrat', sans-serif", fontWeight: '500'}}>
          ${getCartTotal()}
        </Typography>
        <MdShoppingCart className={classes.extendedIcon} />
      </Fab>
    }
    </div>
    </Container>
   );
}
 
export default Cart;
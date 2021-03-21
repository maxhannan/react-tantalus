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
    marginRight: theme.spacing(1),
  },
}));

const Cart = ({cart, getCartTotal, getCartSize}) => {
  const classes = useStyles()
  return ( 

    <Container maxWidth = 'lg'>
    <Typography variant = 'h4'  style = {{fontFamily: "'Montserrat', sans-serif", fontWeight: '500', marginTop: '1rem'}} >
      Your Cart ({getCartSize()})
    </Typography>
    <Grid container spacing={3} style = {{animation: 'fadeIn 500ms ease-in-out', marginTop: '2vh'}}>
      {cart.map(cartItem => (
        <CartItem product = {cartItem} />
      ))}
      {/* <h1>Total: ${getCartTotal()}</h1> */}
    </Grid>
    <div style = {{position: 'fixed', bottom: '30px', right: '30px', transform: 'scale(1.2)'}} className={classes.root}>
      <Fab variant="extended" color = 'secondary' size = 'large'>
        <MdShoppingCart className={classes.extendedIcon} />
        <Typography style = {{fontFamily: "'Montserrat', sans-serif", fontWeight: '500'}}>
          ${getCartTotal()}
        </Typography>
      </Fab>
    </div>
    </Container>
   );
}
 
export default Cart;
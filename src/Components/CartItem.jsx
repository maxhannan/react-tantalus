
import { 
  Button, 
  Container, 
  IconButton, 
  Typography, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  makeStyles,
  Grid,
  Paper
} from "@material-ui/core";
import { useState } from "react";
import {TiTrash} from 'react-icons/ti'

const useStyles = makeStyles((theme) => ({
  formContainer:{
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',  
    padding: '1.5rem',
    "@media (max-width: 1000px)":{
      padding: '.5rem',
    } 
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120,
    fontFamily: "'Montserrat', sans-serif",
  
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontFamily: "'Montserrat', sans-serif",
  },

}))

const CartItem = ({product, handleCartDelete, handleCartUpdate}) => {
  const classes = useStyles()
  const id = product.id
  const [qty, setQty] = useState(product.qty)

  const handleChange = (newVal) => {
    setQty(newVal)
    handleCartUpdate(id, newVal)
  }
  return ( 
    <Grid item  xs = {6} sm = {4} md = {3} lg = {2}>
    
    <img src={product.pic} alt="" style = {{maxWidth: '100%', maxHeight: '100%'}}/>
    <div  id = {product.id} style = {{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
    <FormControl variant="outlined" size = 'small' onSubmit = {e => e.preventDefault()}
          className={classes.formControl} fullWidth >
            <InputLabel id="qtyLabel">Quantity</InputLabel>
            <Select
              value = {qty}
              onChange = {(e) => handleChange(e.target.value) }
              labelId="qtyLabel"
              id="qtySelect"
              label="Quantity"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>
        <IconButton color = 'secondary' onClick = {(e) => handleCartDelete(id)} >
          <TiTrash/>
        </IconButton> 
    </div>
     
      
      <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Typography variant = 'subtitle1'  style = {{fontFamily: "'Montserrat', sans-serif"}} gutterBottom>
          {product.text}
        </Typography>
        <Typography variant = 'subtitle1'  style = {{fontFamily: "'Montserrat', sans-serif"}} gutterBottom>
          ${product.price}
        </Typography>

      </div>
  
    </Grid>
  );
}
 
export default CartItem;
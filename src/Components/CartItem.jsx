
import { 
  IconButton, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import {TiTrash} from 'react-icons/ti'
import { Type } from "./StyledComponents";

const useStyles = makeStyles((theme) => ({
  imgStyle: {
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  infoHolder: {
    display: 'flex', 
    width: '100%', 
    justifyContent: 'space-between'
  },
  textContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center'
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
  const avail = Array.from({length: product.available}, (v, k) => k+1); 
  

  const handleChange = (newVal) => {
    handleCartUpdate(id, newVal)
  }

  return ( 
    <Grid item  xs = {6} sm = {4} md = {3} lg = {2}>
      <img 
        src={product.pic} 
        alt={product.title} 
        className = {classes.imgStyle}
      />
      <div id = {product.id} className = {classes.infoHolder}>
        <FormControl 
          fullWidth
          variant="outlined" 
          size = 'small' 
          className={classes.formControl}  
        >
          <InputLabel>Quantity</InputLabel>
          <Select
            value = { product.qty }
            onChange = { e => handleChange(e.target.value) }
            labelId="qtyLabel"
            label="Quantity"
          >
            {avail.map(option => {
              console.log(option)
              return <MenuItem value={option}>{option}</MenuItem>
            })}
          </Select>
        </FormControl>
        <IconButton color = 'secondary' onClick = {(e) => handleCartDelete(id)} >
          <TiTrash/>
        </IconButton> 
      </div>
      <div className = {classes.textContainer}>
        <Type variant = 'body2' color = 'secondary' gutterBottom>Size: {product.size}</Type>
        <Type variant = 'subtitle1' gutterBottom>{product.text}</Type>
        <Type variant = 'subtitle1' gutterBottom>${product.price}</Type>
      </div>
    </Grid>
  );
}
 
export default CartItem;
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useStyles } from './styles';
import { 
  Button, 
  Container, 
  IconButton, 
  Typography, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select
} from "@material-ui/core";
import Loader from "../Loader";
import { Type } from "../StyledComponents";

const DetailsPage = ({ product, handleAddToCart , getCartItemById}) => {
  const classes = useStyles();
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(product.sizes[0])
  const avail = Array.from({length: product.available}, (v, k) => k+1); 
  
  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 500);
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(getCartItemById(product.id).qty >= product.available){
      return
    }

    handleAddToCart(product.id, qty, size)
    setQty(1)
  }
  if(loading) return <Loader/>

  return ( 
    <>
    <div className={classes.btnContainer}>
      <IconButton color = 'secondary' onClick = {() => history.goBack()}>
        <IoReturnUpBackOutline />
      </IconButton>
    </div>
    <Container maxWidth = 'md' className = {classes.container}>
      <div className = {classes.imgContainer}>
        <img src={product.pic} 
          onMouseOver={e => e.currentTarget.src = product.altPic}
          onMouseOut={e => e.currentTarget.src = product.pic}
          alt={product.text} className = {classes.imgStyle} 
        />
      </div>
      <div className={classes.infoContainer}>
      
        <form className={classes.formContainer} onSubmit = {e => handleSubmit(e)}>
          <Type variant = 'overline' style = {{ margin: '0px 4px'}} color = 'secondary'>
            { getCartItemById(product.id).inCart && 
              <> 
                {getCartItemById(product.id).qty} in cart
              </>
            }
          </Type>
          <Type variant = 'h5' style = {{ margin: '0px 4px'}} gutterBottom>
            {product.text}
          </Type>
          <Type variant = 'h6' style = {{ margin: '4px 4px'}} color = 'textSecondary' gutterBottom>
            ${product.price}
          </Type>
         
          <div style = {{display:'flex', justifyContent: 'space-between'}}>
          <FormControl 
            variant="outlined" 
            size = 'small'
            onSubmit = {e => e.preventDefault()}
            className={classes.formControl}
          >
            <InputLabel id="qtyLabel"><Type>Quantity</Type></InputLabel>
            <Select
              labelId="qtyLabel"
              id="qtySelect"
              label="Quantity"
              value = {qty}
              onChange = {e => setQty(e.target.value)}
            >
              {avail.map(option => {
                console.log(option)
                return <MenuItem value={option}><Type>{option}</Type></MenuItem>
              })}
  
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth className={classes.formControl}  size = 'small' style = {{marginBottom: '2vh'}} >
            <InputLabel id="sizeLabel"><Type>Size</Type></InputLabel>
            <Select  
              labelId="sizeLabel"
              id="sizeSelect"
              label="Size"
              value = {size}
              onChange = {e => setSize(e.target.value)}
            >
            {product.sizes.map(size => (
              <MenuItem value={size}><Type>{size}</Type></MenuItem>
            ))}
            </Select>
          </FormControl>
          </div>
          <Button variant = 'outlined' color = 'secondary' type = 'submit' style = {{fontFamily: "'Montserrat', sans-serif", margin: '4px',}} >
          <Type>Add To cart</Type></Button>

        </form>
      </div>
    </Container>
    </>
   );
}
 
export default DetailsPage;
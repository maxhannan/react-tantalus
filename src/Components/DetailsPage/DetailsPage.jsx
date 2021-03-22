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
  const avail = [...Array(product.available + 1).keys()].slice(1, product.available + 1)

  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 500);
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(getCartItemById(product.id).qty >= product.available){
      return
    }

    handleAddToCart(product.id, qty)
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
          onMouseOver={e => (e.currentTarget.src = product.altPic)}
          onMouseOut={e => (e.currentTarget.src = product.pic)}
          alt={product.text} className = {classes.imgStyle} 
        />
      </div>
      <div className={classes.infoContainer}>
      
        <form className={classes.formContainer} onSubmit = {e => handleSubmit(e)}>
        <Type variant = 'overline' style = {{ margin: '0px 4px'}} color = 'secondary'>
            {getCartItemById(product.id).inCart && <>{getCartItemById(product.id).qty } in cart</> }
          </Type>
          <Type variant = 'h5' style = {{ margin: '0px 4px'}} gutterBottom>
            {product.text}
          </Type>
          <Type variant = 'h6' style = {{ margin: '4px 4px'}} gutterBottom>
            ${product.price}
          </Type>
         
          <div style = {{display:'flex', justifyContent: 'space-between'}}>
          <FormControl 
            variant="outlined" 
            size = 'small'
            onSubmit = {e => e.preventDefault()}
            className={classes.formControl}
          >
            <InputLabel id="qtyLabel">Quantity</InputLabel>
            <Select
              labelId="qtyLabel"
              id="qtySelect"
              label="Quantity"
              value = {qty}
              onChange = {e => setQty(e.target.value)}
            >
              {avail.map(option => {
                console.log(option)
                return <MenuItem value={option}>{option}</MenuItem>
              })}
  
            </Select>
          </FormControl>

          <FormControl variant="outlined" fullWidth className={classes.formControl}  size = 'small' style = {{marginBottom: '2vh'}} >
            <InputLabel id="sizeLabel">Size</InputLabel>
            <Select  
              labelId="sizeLabel"
              id="sizeSelect"
              label="Size"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
          <Button variant = 'outlined' color = 'secondary' type = 'submit' style = {{fontFamily: "'Montserrat', sans-serif", margin: '4px',}} >Add To cart</Button>

        </form>
      </div>
    </Container>
    </>
   );
}
 
export default DetailsPage;
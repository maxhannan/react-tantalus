import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdClose } from 'react-icons/md'
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

const DetailsPage = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  
  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 500);
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddToCart(product.id, qty)
    setQty(1)
  }

  if(loading) return <Loader/>

  return ( 
    <>
    <div className={classes.btnContainer}>
      <IconButton color = 'secondary' onClick = {() => history.goBack()}>
        <MdClose />
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
        <Typography variant = 'h5' style = {{fontFamily: "'Montserrat', sans-serif", margin: '4px 4px'}} gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'h6' style = {{fontFamily: "'Montserrat', sans-serif", margin: '4px 4px'}} gutterBottom>
            ${product.price}
          </Typography>
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
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
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
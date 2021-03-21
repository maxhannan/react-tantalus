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
  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 500);
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddToCart(product.id)
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
          <Typography variant = 'h5' style = {{fontFamily: "'Montserrat', sans-serif",}} gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'h6' style = {{fontFamily: "'Montserrat', sans-serif",}} gutterBottom>
            ${product.price}
          </Typography>

          <FormControl variant="outlined" onSubmit = {e => e.preventDefault()}
          className={classes.formControl}>
            <InputLabel id="qtyLabel">Quantity</InputLabel>
            <Select
              fullWidth
              labelId="qtyLabel"
              id="qtySelect"
              label="Quantity"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}  style = {{marginBottom: '2vh'}} >
            <InputLabel id="sizeLabel">Size</InputLabel>
            <Select
              fullWidth
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
          <Button variant = 'outlined' color = 'secondary' type = 'submit' style = {{fontFamily: "'Montserrat', sans-serif",}} >Add To cart</Button>
        </form>
      </div>
    </Container>
    </>
    
   );
}
 
export default DetailsPage;
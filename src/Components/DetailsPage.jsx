import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdClose } from 'react-icons/md'
import { makeStyles } from '@material-ui/core/styles';
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

import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    animation: 'appear 500ms ease',
    marginBottom: '2vh',
    "@media (max-width: 1000px)":{
      flexDirection: 'column'
    }
  },
  imgContainer: {
    width: '50%',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 1000px)":{
      width: '100%',
      height: '100%'
    } 
  },
  imgStyle: {
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  infoContainer: {
    width: '50%',
    display: 'flex', 
    flexDirection: 'column',
    "@media (max-width: 1000px)":{
      width: '100%',
    } 
  },
  btnContainer:{
    width: '95%', 
    display: 'flex', 
    justifyContent: 'flex-end',
    "@media (max-width: 1000px)":{
      width: '98%',
    } 
  },
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
}));

const DetailsPage = ({ product, handleAddToCart }) => {
  const classes = useStyles();
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 1500);
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
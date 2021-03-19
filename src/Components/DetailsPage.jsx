import { useHistory } from "react-router-dom";
import mens8 from '../Assets/mens/mens8.jpg'
import mens8lt from '../Assets/mens/mens8alt.jpg'
import uniqid from 'uniqid'
import { Button, Container, IconButton, Typography, CircularProgress } from "@material-ui/core";
import {MdClose} from 'react-icons/md'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    animation: 'appear 500ms ease',
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
    width: '85%', 
    display: 'flex', 
    justifyContent: 'flex-end',
    "@media (max-width: 1000px)":{
      width: '95%',
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

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

const DetailsPage = ({product}) => {
  const classes = useStyles();
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() =>  setLoading(false) , 1500);

  },[])

  return ( 
    <>
    {loading && 
    <div style = {{display: 'flex', height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress color="secondary" size = '3rem' />
    </div>}
    { !loading &&

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
        alt="" className = {classes.imgStyle} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.formContainer}>
          <Typography variant = 'h4' style = {{fontWeight: '300'}} gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'h5' gutterBottom>
            ${product.price}
          </Typography>
          <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="qtyLabel">Quantity</InputLabel>
            <Select
            fullWidth
              labelId="qtyLabel"
              id="qtySelect"
              // value={age}
              // onChange={handleChange}
              label="Quantity"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="sizeLabel">Size</InputLabel>
            <Select
            fullWidth
              labelId="sizeLabel"
              id="sizeSelect"
              // value={age}
              // onChange={handleChange}
              label="Size"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button variant = 'contained' color = 'secondary' >Add To cart</Button>
        </div>
      </div>
    </Container>
    </>
    }
    </>
   );
}
 
export default DetailsPage;
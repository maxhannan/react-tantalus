import {  Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    "@media (max-width: 1000px)":{
      padding: '8px',
    } ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imgStyle: {
    maxWidth: '100%', 
    maxHeight: '100%', 
  },
  typeContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    height: '100%',
    textAlign: 'left',
    position: 'relative'
  }
}));

const ProductBox = ({product, handleOpenDetails}) => {
  const classes = useStyles()
  return ( 
    <Grid item  xs = {6} sm = {4} md = {4} lg = {3}>
      <Paper elevation = {0} className={classes.paper}>
        <div >
        <RouterLink to = '/react-tantalus/details'>
          <img 
          onClick = {(e) => handleOpenDetails(e.target.id)}
          id = {product.id}
          className={classes.imgStyle} 
          src = { product.pic } alt = { product.text }
          onMouseOver={e => (e.currentTarget.src = product.altPic)}
          onMouseOut={e => (e.currentTarget.src = product.pic)}
          />   
          </RouterLink>  
        </div>
        <div className={classes.typeContainer}>
          <Typography variant = 'body2' color = 'textPrimary' style = {{fontFamily: "'Montserrat', sans-serif",}} gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'body2' color = 'textSecondary'  style = {{fontFamily: "'Montserrat', sans-serif"}} gutterBottom>
            ${product.price}
          </Typography>
        </div>
      </Paper>
    </Grid>
   );
}
 
export default ProductBox;
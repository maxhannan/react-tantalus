import {  Typography, Grid, Paper, makeStyles, IconButton } from "@material-ui/core";
import {Link as RouterLink } from 'react-router-dom'
import {MdInfoOutline, MdAddCircleOutline} from 'react-icons/md'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imgStyle: {
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  typeContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    height: '100%',
    textAlign: 'left'
  }
}));

const ProductBox = ({product}) => {
  const classes = useStyles()
  return ( 
    <Grid item  xs = {12} sm = {6} md = {4} lg = {3}>
      <Paper className={classes.paper}>
      <div style = {{position: 'relative'}}>
        <img 
        className={classes.imgStyle} 
        src = {product.pic} alt=""
        onMouseOver={e => (e.currentTarget.src = product.altPic)}
        onMouseOut={e => (e.currentTarget.src = product.pic)}
        />
        <div style = {{position: 'absolute', bottom: '0', left: '0'}}> 
          <IconButton color = 'primary'>
            <MdAddCircleOutline/>
          </IconButton>
        </div>
        <div style = {{position: 'absolute', bottom: '0', right: '0'}}> 
          <IconButton color = 'secondary' component = {RouterLink} to = '/react-tantalus/details'>
            <MdInfoOutline/>
          </IconButton>
        </div>
      </div>
        <div className={classes.typeContainer}>
          <Typography variant = 'h6' color = 'textPrimary' gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'h6' color = 'textSecondary' gutterBottom>
            ${product.price}
          </Typography>
        </div>
      </Paper>
    </Grid>
   );
}
 
export default ProductBox;
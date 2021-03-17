
import { MdClose } from 'react-icons/md'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button, IconButton, Typography } from '@material-ui/core'
import './styles.css'

const DetailsPage = ({product, handleClick}) => {
  return ( 
    <div  className = 'detailsContainer'>
      <div className="closeBtnHolder">
        <IconButton onClick = {handleClick}>
          <MdClose color = '#252525'/>
        </IconButton>
      </div>
      <div className = 'detailsPage'>
      <div style = {imgContainer}>
        <img src={product.pic} style = {imgStyle} alt = 'hero' />
      </div>
      <div style = { infoContainer }>
        <form className = 'formContainer'>
          <Typography variant = 'h4' gutterBottom>
            {product.text}
          </Typography>
          <Typography variant = 'h5' color = 'primary' gutterBottom>
            ${product.price}
          </Typography>
          <Select
            value = {1}
            variant = 'outlined'
            style = {{width: '40%', marginBottom: '5%'}}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
          <Button variant = 'outlined' type = 'submit' color = 'primary'>Add to Cart</Button> 
        </form>
      </div>
    </div>
</div>
 
   );
}
 
export default DetailsPage;

const infoContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',

}
const imgContainer ={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',


}

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%'
}

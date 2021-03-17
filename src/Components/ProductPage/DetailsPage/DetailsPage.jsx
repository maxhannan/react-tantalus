
import { MdClose } from 'react-icons/md'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button, IconButton, Typography } from '@material-ui/core'
import './styles.css'
import { useState } from 'react';

const DetailsPage = ({product, handleClick, handleAddToCart}) => {
  const [quantity, setQuantity] = useState(1);
  
  const handleSubmit = (e,product) => {
    e.preventDefault()
    const productEntry = {product: product, qty: quantity}
    setQuantity(1)
    handleAddToCart(productEntry)
  }
  return ( 
    <div  className = 'detailsContainer'>
      <div className="closeBtnHolder">
        <IconButton onClick = {handleClick}>
          <MdClose color = '#252525'/>
        </IconButton>
      </div>
      <div className = 'detailsPage'>
        <div 
          className = 'detailsImgContainer' style = {imgContainer}
          onMouseOver={e => (e.currentTarget.firstChild.src = product.altPic)}
          onMouseOut={e => (e.currentTarget.firstChild.src = product.pic)}
        >
          <img src={product.pic} className = 'imgStyle' alt = 'hero' />
        </div>
        <div className = 'detailsInfoContainer' style = { infoContainer }>
          <form className = 'formContainer' onSubmit = {(e) => handleSubmit(e, product)}>
            <Typography variant = 'h4' gutterBottom>
              {product.text}
            </Typography>
            <Typography variant = 'h5' color = 'primary' gutterBottom>
              ${product.price}
            </Typography>
            <Select
              value = {quantity}
              onChange = {(e) =>  setQuantity(e.target.value)}
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
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
}



import { Button, Typography } from '@material-ui/core'
import { MdAddCircleOutline } from 'react-icons/md'
import './styles.css'
const ProductPreview = ({product, handleClick}) => {
  return ( 
    <div className="container">
        <div 
        className="imgContainer"
        onMouseOver={e => (e.currentTarget.firstChild.src = product.altPic)}
        onMouseOut={e => (e.currentTarget.firstChild.src = product.pic)}
        onClick = {handleClick} 
        >
          <img src={product.pic} alt="" style = {imgStyle}/>
          <div className="overlay" id = {product.id}>
            <Button variant = 'contained' endIcon={<MdAddCircleOutline />}>Shop</Button>
          </div>
        </div>
        <div className="textContainer">
          <Typography variant = 'body1'>
            {product.text}
            
          </Typography>
          <Typography variant = 'subtitle1' color = 'primary'>
            ${product.price}
          </Typography>
        </div>
    </div>
   );
}
 
export default ProductPreview;

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%'
}

import { Button, Typography } from '@material-ui/core'
import imgone from '../Assets/1.jpg'
import imgTwo from '../Assets/2.jpg'
import imgThree from '../Assets/3.jpg'
import imgFour from '../Assets/4.jpg'
import {MdAddCircleOutline} from 'react-icons/md'
const ProductPreview = ({product, handleClick}) => {
  return ( 
    <div className="container">
        <div 
        className="imgContainer"
        onMouseOver={e => (e.currentTarget.firstChild.src = product.altPic)}
        onMouseOut={e => (e.currentTarget.firstChild.src = product.pic)}
        >
          <img src={product.pic} alt="" style = {imgStyle}/>
          <div className="overlay" id = {product.id}>
            <Button onClick = {handleClick} variant = 'contained' endIcon={<MdAddCircleOutline />}>Shop</Button>
          </div>
        </div>
        <div className="textContainer">
          <Typography variant = 'body1'>
            {product.text}
            
          </Typography>
          <Typography variant = 'body2'>
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

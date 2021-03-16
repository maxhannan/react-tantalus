import imgone from '../Assets/1.jpg'
import imgTwo from '../Assets/2.jpg'
import imgThree from '../Assets/3.jpg'
import imgFour from '../Assets/4.jpg'
import ProductPreview from './Product'
import uniqid from 'uniqid'
import { Container, Typography } from '@material-ui/core'
import { useState } from 'react'
const productArray = [
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  }, 
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
  {
    id: uniqid(),
    text: 'Champion UO Exclusive Vintage Dye Hoodie Sweatshirt',
    price: 29.99,
    pic: imgFour,
    altPic: imgTwo
  },
]


const ProductPage = ({heading}) => {
  const [focusItem, setFocusItem] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  

  const handleClick = (e) => {
    const targetId = e.target.closest('div').id
    console.log(targetId)
    console.log(productArray.find(product => product.id === targetId))
  }
  return (
  <Container maxWidth = 'lg' style = {containerStyle}>
    <Typography variant = 'h4' gutterBottom>
      {heading}
    </Typography>
    {!focusItem && <div className = 'gridProduct' style = {gridContainer}>
    {productArray.map(product => (
      <ProductPreview key = {product.id} handleClick = {handleClick} product = {product}/>
    ))}
     </div>}
    </Container>
  );
}
 
export default ProductPage;
const containerStyle = {
  marginTop: '1rem'
}
const gridContainer = {
  display: 'grid',
  gridGap: '2em',

 
}

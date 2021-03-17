import { Container, Typography} from '@material-ui/core'
import { productArray } from '../../ProductArray'
import { useState } from 'react'
import './styles.css'
import ProductPreview from './Product/Product'
import DetailsPage from './DetailsPage/DetailsPage'

const ProductPage = ({heading, section = 'mens'}) => {

  const [activeProduct, setActiveProduct ] = useState({});
  const [openDetails, setOpenDetails] = useState(false);

  const handleClick = (e) => {
    const targetId = e.target.closest('div').id
    const newProduct = productArray.find(product => product.id === targetId)
    setActiveProduct(newProduct)
    setOpenDetails(true)
  }

  return (
    <>
    {openDetails && <DetailsPage product = {activeProduct} handleClick = {() => setOpenDetails(false)}/>}
    {!openDetails && 
      <Container maxWidth = 'lg' style = {containerStyle}>
        <Typography variant = 'h3' gutterBottom>
          {heading}
        </Typography>
        <div className = 'gridProduct' style = {gridContainer}>
          {productArray.filter(product => product.sectionId.includes(section)).map(product => (
            <ProductPreview key = {product.id} handleClick = {handleClick} product = {product}/>
          ))}
        </div>
      </Container>
    }
    </>
  );
}
 
export default ProductPage;


const containerStyle = {
  marginTop: '1rem',
  marginBottom: '1rem',
  padding: '0rem 2rem'
}
const gridContainer = {
  display: 'grid',
  
  
}

 
import { Container, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import {productArray} from '../ProductArray'
import Loader from "./Loader";
import ProductBox from "./ProductBox";

const ProductGrid = ({section, handleOpenDetails, heading}) => {
  const filteredProducts = productArray
    .filter(product => product.sectionId.includes(section));

  const ProductElements = () =>{
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(() =>  setLoading(false) , 500);
    },[])

    if(loading) return <Loader />

    return(
      <>
      <Typography variant = 'h4'  style = {{ animation: 'fadeIn 500ms ease-in-out',fontFamily: "'Montserrat', sans-serif", fontWeight: '400', marginTop: '1rem', marginBottom: '.5rem'}} >
        {heading}
      </Typography>
      <Grid container spacing={1} style = {{animation: 'fadeIn 500ms ease-in-out'}}>
        {filteredProducts.map(product => (
          <ProductBox key = {product.id} handleOpenDetails = {handleOpenDetails} product = {product}/>
        ))}
      </Grid>
      </>
    );
  }
  
  return ( 
    <Container  maxWidth = 'lg'>
        <ProductElements/>
    </Container>
   );
}
 
export default ProductGrid;
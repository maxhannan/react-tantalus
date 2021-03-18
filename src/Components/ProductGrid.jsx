import { Container, Grid } from "@material-ui/core";
import { useEffect } from "react";
import {productArray} from '../ProductArray'
import ProductBox from "./ProductBox";

const ProductGrid = ({section = 'men'}) => {
  const filteredProducts = productArray.filter(product => product.sectionId.includes(section))
 
  const ProductElements = () =>{
    useEffect(()=>{
      console.log('Mount')
    },[])
  return(
    <Grid container spacing={3} style = {{animation: 'appear 500ms ease-in-out'}}>
      {filteredProducts.map(product => (
        <ProductBox key = {product.id} product = {product}/>
      ))}
    </Grid>
  );
  }
  
  return ( 
    <Container maxWidth = 'lg' >
        <ProductElements/>
    </Container>
   );
}
 
export default ProductGrid;
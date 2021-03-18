import { Container, Grid, LinearProgress, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import {productArray} from '../ProductArray'
import ProductBox from "./ProductBox";

const ProductGrid = ({section = 'men'}) => {
  const filteredProducts = productArray.filter(product => product.sectionId.includes(section))
 
  const ProductElements = () =>{
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(() =>  setLoading(false) , 1500);

    },[])
  return(
    <>
    {loading &&  
    <div style = {{display: 'flex', height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
    <CircularProgress color="secondary" size = '3rem' />
    </div>
    }
    {!loading && <Grid container spacing={3} style = {{animation: 'appear 500ms ease-in-out'}}>
      {filteredProducts.map(product => (
        <ProductBox key = {product.id} product = {product}/>
      ))}
    </Grid>}
    </>
  );
  }
  
  return ( 
    <Container maxWidth = 'lg' >
        <ProductElements/>
    </Container>
   );
}
 
export default ProductGrid;
import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import {productArray} from '../ProductArray'
import Loader from "./Loader";
import ProductBox from "./ProductBox";

const ProductGrid = ({section, handleOpenDetails}) => {
  const filteredProducts = productArray
    .filter(product => product.sectionId.includes(section));

  const ProductElements = () =>{
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(() =>  setLoading(false) , 500);
    },[])

    if(loading) return <Loader />

    return(
      <Grid container spacing={1} style = {{animation: 'fadeIn 500ms ease-in-out', marginTop: '2vh'}}>
        {filteredProducts.map(product => (
          <ProductBox key = {product.id} handleOpenDetails = {handleOpenDetails} product = {product}/>
        ))}
      </Grid>
    );
  }
  
  return ( 
    <Container  maxWidth = 'lg'>
        <ProductElements/>
    </Container>
   );
}
 
export default ProductGrid;
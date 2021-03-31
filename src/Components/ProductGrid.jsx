import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import {productArray } from '../ProductArray'
import Loader from "./Loader";
import ProductBox from "./ProductBox";
import { Type } from "./StyledComponents";

const ProductGrid = ({section, handleOpenDetails, heading}) => {
  const filteredProducts = productArray
    .filter(product => product.sectionId.includes(section));

  const ProductElements = () =>{
    const [loading, setLoading] = useState(true)
    const [ products, setProducts ] = useState([])
    useEffect(()=>{
      productMaker()
    },[])

    const productMaker = async () => {
      await setProducts(
        filteredProducts.map(product => (
          <ProductBox 
          key = {product.id} 
          handleOpenDetails = {handleOpenDetails} 
          product = {product}
        />
        ))
      )
      setTimeout(() =>  setLoading(false) , 1000);
    }

      

    if(loading) return <Loader />


    return(
      <>
        <Type 
          variant = 'h5'  
          style = {{ animation: 'fadeIn 500ms ease-in-out', marginTop: '1rem', marginLeft: '.5rem', marginBottom: '.5rem'}} 
        >
          {heading}
        </Type>
        <Grid container spacing={1} style = {{animation: 'fadeIn 500ms ease-in-out'}}>
          {products}
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
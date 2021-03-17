import ProductPage from "../ProductPage/ProductPage";

const Mens = ({handleAddToCart}) => {
  return ( 
    <ProductPage heading = "Men's Clothing" section = 'men' handleAddToCart = {handleAddToCart}/>
   );
}
 
export default Mens;
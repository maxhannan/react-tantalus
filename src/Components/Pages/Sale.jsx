import ProductPage from "../ProductPage/ProductPage";
const Sale = ({handleAddToCart}) => {
  return ( 
    <ProductPage heading = 'Sale' section = 'sale' handleAddToCart = {handleAddToCart}/>
   );
}
 
export default Sale;
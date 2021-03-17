import ProductPage from "../ProductPage/ProductPage";

const Womens = ({handleAddToCart}) => {
  return ( 
    <ProductPage heading = "Women's Clothing" section = 'women' handleAddToCart ={handleAddToCart}/>
   );
}
 
export default Womens;
import ProductPage from "../ProductPage/ProductPage";

const Home = ({handleAddToCart}) => {
  return ( 
    <ProductPage heading = 'Home Goods' section = 'home' handleAddToCart ={handleAddToCart}/>
   );
}
 
export default Home;
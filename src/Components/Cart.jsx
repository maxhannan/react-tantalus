

const Cart = ({cart}) => {

  return ( 
    <>
    {cart.map(cartItem => (
      <div>
        <h1>{cartItem.text}</h1>
        <h2>Qty: {cartItem.qty}</h2>
        <h2>Price: ${cartItem.price.toFixed(2)}</h2>
        <h2>SubTotal: ${(cartItem.price * cartItem.qty).toFixed(2)}</h2>
      </div>
    ))}

    </>
   
   );
}
 
export default Cart;
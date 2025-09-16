


function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return <h2>🛒 Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
          <img src={item.image} alt={item.title} width="50" />
          <span>{item.title} - ${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

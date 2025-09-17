
import "../cart-items/cart.css";

function Cart({ cart, setCart }) {
  const incrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return <h2>🛒 Your cart is empty</h2>;
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px",
            width: "600px",
          }}
        >
          <div className="fl">
            <div>
              <img src={item.image} alt={item.title} width="50" />
            </div>
            <div style={{ flex: 1, marginLeft: "10px" }}>
              <span>{item.title}</span> <br />
              <span>💲{item.price}</span> <br />
              <span>Qty: {item.quantity}</span>
            </div>

            <div>
              <button onClick={() => decrementQty(item.id)}>-</button>
              <button onClick={() => incrementQty(item.id)}>+</button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌ Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: 💲{totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;

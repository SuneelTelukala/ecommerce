
 import axios from "axios";
import { useEffect, useState } from "react";
import "../products/product.css";

function Products({ search,cart,setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes((search || "").toLowerCase())
  );

  const addToCart = (p) => {
    setCart([...cart, p]);
  };

  return (
    <div className="products-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <button className="add-btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Products;

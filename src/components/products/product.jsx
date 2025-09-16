

import axios from "axios";
import { useEffect, useState } from "react";
import "../products/product.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
 
  
  const addTocart= (p)=>{
    setCart([...cart,p])
  }

  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
           <button className="add-btn" onClick={()=>addTocart(p)} >Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;

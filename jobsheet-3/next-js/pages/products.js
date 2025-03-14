import { use, useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const Response = await fetch('api/products');
            const products = await Response.json();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
      <div>
        <h1>Daftar Produk</h1>
        <ul>
            {products.map((products) => (
                <li key={products.id}>{products.title}</li>
            ))}
        </ul>
      </div>
    );
};

export default ProductList;
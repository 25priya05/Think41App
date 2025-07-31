import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://localhost:5000/api/products")
            .then((response) => setProducts(response.data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p._id}>
                        {" "}
                        <link to={`/products/${p._id}`}>
                            {p.name} - {p.retail_price}
                        </link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;

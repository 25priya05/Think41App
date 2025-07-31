import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://localhost:5000/api/products/${id}`)
            .then((response) => setProducts(response.data))
            .catch((err) => console.error(err));
    }, [id]);
    if (!product) return <p>Loading...</p>;
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Brand: {product.brand}</p>
            <p>Cateogry: {product.category}</p>
            <p>Retail Price:rs {product.retail_price}</p>
            <p>Department:{product.department}</p>
            <Link to={"/"}>Back to Product List</Link>
        </div>
    );
}
export default ProductDetail;

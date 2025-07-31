import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DepartmentPage = () =>{
    const {id} = useParams();
    const [department, setDepartment] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    
  useEffect(()=>{
    axios.get(`http://localhost:3001/departments/${id}`)
    .then(response => {
        setDepartment(response.data.department);
        setProducts(response.data.products);
        setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
            });
            }, [id]);
        
            if(loading) return <p>Loading...</p>

            if(!department) return <p>Department not found</p>;
            return (
                <div>
                    <h1>{department}
                        ({product.length}items)</h1>
                    <link to="/products">Back to all Products </link>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                        {products.length >0 ?(
                            products.map((product)=>(
                                <div key={product.id}style={{border:"1px solid #ccc",margin:10,padding:10}}>
                                    <h4>{product.name}</h4>
                                    <p>Price: {product.price}</p>
                                    <link to = {`/products/${product._id}`}>view Details</link> 
                                    </div>
                            ))
                        ):
                        (<p>No products found</p>)}
                        
                    </div>

                </div>


                    );

};

export default DepartmentPage;
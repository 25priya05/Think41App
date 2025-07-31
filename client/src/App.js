import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import DepartmentsList from "./components/DepartmentList";
import DepartmentPage from "./components/DepartmentPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/departments" element={<DepartmentsList />} />
                <Route path="/departments/:id" element={<DepartmentPage />} />
            </Routes>
        </Router>
    );
}

export default App;

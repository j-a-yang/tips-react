import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Header from "../components/Header";
import ShiftForm from "../components/ShiftForm";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header subtitle="Information is Power" />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<ShiftForm />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;

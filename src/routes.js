import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from
    'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import App from './pages/App';
import Sidebar from "./components/Sidebar";
import { isAuthenticated } from "./services/auth";

const MainPage = () => <Main />
const LoginPage = () => <Login />
const LogoutPage = () => <Logout />
const NotFoundPage = () => <NotFound />
const RegisterPage = () => <Register />
const AppPage = () => {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return <App />;
}
const Rotas = () => (
    <Router>
        <Sidebar />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/app' element={<AppPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
);
export default Rotas;
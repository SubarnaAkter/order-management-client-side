import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AllOrders from './Pages/Home/AllOrders/AllOrders';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/Products/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shoe/:id" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
      <Route path="/order" element={<PrivateRoute><AllOrders /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  </BrowserRouter>,
    </AuthProvider>
  );
}

export default App;

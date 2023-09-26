import React from 'react';
import Products from './components/ProductList';
import Login from './components/Login';
import Payment from './components/Payment';
import PaymentResults from './components/Paymentresults';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment/result' element={<PaymentResults />} />
        </Routes>
      </Router>
    );
  }

export default App;
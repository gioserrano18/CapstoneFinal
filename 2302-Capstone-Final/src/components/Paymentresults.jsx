import React from 'react';
import { Link } from 'react-router-dom';

function PaymentResults() {

  return (
    <div className="flex justify-center items-center h-screen space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
        <p className="mb-4">Order confirmation will be sent to your email.</p>
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentResults;







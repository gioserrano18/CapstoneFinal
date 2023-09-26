import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <Form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold text-center">Please Sign Up</h1>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
          </Form.Group>
          <div className="text-center">
            <Link to={`/products`}>
              <Button block size="lg" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

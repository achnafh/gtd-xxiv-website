import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AxiosInit } from "../../utils/network";
import "./style.css";

export default function Login(props) {
  const username = useRef();
  const password = useRef();
  const gtdAxios = AxiosInit();
  const navigate = useNavigate();
  async function handleSubmit() {
    const post = await gtdAxios.post("/login", {
      username: username.current.value,
      password: password.current.value,
    });
    localStorage.setItem("token", post.data.token);
    navigate("/lbmanager");
  }

  return (
    <div className="login_container">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter your username"
            ref={username}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter your password"
            type="password"
            ref={password}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
}

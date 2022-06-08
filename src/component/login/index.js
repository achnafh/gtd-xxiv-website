import React, { useRef, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AxiosInit } from "../../utils/network";
import ErrorModal from "../common/error.modal";
import "./style.css";

export default function Login(props) {
  const username = useRef();
  const password = useRef();
  const gtdAxios = AxiosInit();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function handleSubmit() {
    setLoading(true);
    try {
      const post = await gtdAxios.post("/login", {
        username: username.current.value,
        password: password.current.value,
      });
      localStorage.setItem("token", post.data.token);
      navigate("/lbmanager");
    } catch (e) {
      setErrorMessage(e.response.data.message);
      setShow(true);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login_container">
        {loading ? (
          <div className="login_overlay">
            <Spinner animation="border" />
          </div>
        ) : (
          <></>
        )}
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
      <ErrorModal show={show} setShow={setShow} message={errorMessage} />
    </>
  );
}

import React, { useRef, useState } from "react";
import { Form, Button, Spinner, FloatingLabel } from "react-bootstrap";
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

  function handleKeyPress(key) {
    if (key.code === "Enter") {
      handleSubmit();
    }
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
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb"
        >
          <Form.Control
            type="username"
            placeholder="Username"
            ref={username}
            onKeyDown={handleKeyPress}
          />
        </FloatingLabel>
        <div style={{ height: "1%" }} />
        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            ref={password}
            onKeyDown={handleKeyPress}
          />
        </FloatingLabel>
        <div style={{ height: "1%" }} />
        <Button onClick={handleSubmit}>Login</Button>
      </div>
      <ErrorModal show={show} setShow={setShow} message={errorMessage} />
    </>
  );
}

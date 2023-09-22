"use client";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import bgImg from "../../../assets/img.jpg";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 10) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError(null);
    localStorage.setItem("authToken", "jdhskj3287e6832hdu2e7823h");
    router.push("/");
    console.log(email);
    console.log(password);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Image
          src={bgImg}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Row className={style.rows}>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className={style.input}
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={style.input}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && (
                <Alert style={{ margin: "10px 0" }} variant="danger">
                  {error}
                </Alert>
              )}

              <div className={style.btnContainer}>
                <Button variant="primary" type="submit" className={style.btn}>
                  Login
                </Button>
                <span>
                  <a href="/">Forget Password?</a>
                </span>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;

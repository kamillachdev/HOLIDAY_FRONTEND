import React, { useState, FormEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import Form from "../Forms";
import "../index.css";
import "../auth.scss";
import { Grid } from "@mui/material";
import api from "../utils/api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const fetchLoginData = async () => {
    const res = await api({
      method: "get",
      url: `/api/user/getUser?email=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      return res.data;
    }
    throw new AxiosError(`error, status: ${res.status}`);
  };

  const loginMutation = useMutation(fetchLoginData, {
    onSuccess: () => {
      setEmail("");
      setPassword("");
      alert("Login successful!");
    },
    onError: (error) => {
      console.error(error);
      alert("An error occurred during login.");
    },
  });

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateLogin();

    if (isValid) {
      setValidate({});
      setEmail("");
      setPassword("");
      loginMutation.mutate();
    }
  };


  const togglePassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" style={{ flex: 1 }}>
        <Grid item xs={12}>
        <div className="header">
            <div className="inner-header flex">
              <img src="/necto-logo.png" alt="Your Logo" className="logo" />
              <h1 className="systemUrlopowy">SYSTEM URLOPOWY</h1>
            </div>
            <div>
              <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                  <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                  <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{ flex: 1 }}>
          <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
              <div className="d-flex flex-column align-content-end">
                <div className="auth-body mx-auto">
                  <p>Zaloguj się do konta</p>
                  <div className="auth-form-container text-start">
                    <form
                      className="auth-form"
                      method="POST"
                      onSubmit={login}
                      autoComplete="off"
                    >
                      <div className="email mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            validate.validate && validate.validate.email
                              ? "is-invalid "
                              : ""
                          }`}
                          id="email"
                          name="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <div
                          className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.email
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          {validate.validate && validate.validate.email
                            ? validate.validate.email[0]
                            : ""}
                        </div>
                      </div>

                      <div className="password mb-3">
                          <div className="input-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control ${
                                validate.validate && validate.validate.password
                                  ? "is-invalid "
                                  : ""
                              }`}
                              name="password"
                              id="password"
                              value={password}
                              placeholder="Hasło"
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm"
                              onClick={(e) => togglePassword(e)}
                            >
                              <i
                                className={
                                  showPassword ? "far fa-eye" : "far fa-eye-slash"
                                }
                              ></i>{" "}
                            </button>

                          <div
                            className={`invalid-feedback text-start ${
                              validate.validate && validate.validate.password
                                ? "d-block"
                                : "d-none"
                            }`}
                          >
                            {validate.validate && validate.validate.password
                              ? validate.validate.password[0]
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 theme-btn mx-auto"
                        >
                          Zaloguj się
                        </button>
                      </div>
                    </form>

                    <hr />
                    <div className="auth-option text-center pt-2">
                      Nie masz konta?{" "}
                      <Link className="text-link" to="/register">
                        Załóż konto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{ flex: 1 }}>
          <footer>
            <span>
              <b>&copy; {new Date().getFullYear()} Necto S.A.</b>
            </span>
          </footer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

import React, { useState, FormEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import Form from "../Forms";
import '../index.css';
import '../auth.scss';
import { Grid } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      name: {
        value: name,
        isRequired: true,
      },
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

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setName("");
      setEmail("");
      setPassword("");
      alert("Successfully Register User");
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
              <h1>SYSTEM URLOPOWY</h1>
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
                    <p>Create your Account</p>
                    <div className="auth-form-container text-start">
                      <form
                        className="auth-form"
                        method="POST"
                        onSubmit={register}
                        autoComplete={"off"}
                      >
                        <div className="name mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              validate.validate && validate.validate.name
                                ? "is-invalid "
                                : ""
                            }`}
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
        
                          <div
                            className={`invalid-feedback text-start ${
                              validate.validate && validate.validate.name
                                ? "d-block"
                                : "d-none"
                            }`}
                          >
                            {validate.validate && validate.validate.name
                              ? validate.validate.name[0]
                              : ""}
                          </div>
                        </div>
        
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
                              placeholder="Password"
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
                            Sign Up
                          </button>
                        </div>
                      </form>
        
                      <hr />
                      <div className="auth-option text-center pt-2">
                        Have an account?{" "}
                        <Link className="text-link" to="/login">
                          Sign in
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
            <span><b>&copy; {new Date().getFullYear()} Necto S.A.</b></span>
          </footer>
        </Grid>
      </Grid>
    </div>
     
   );
 };
 
 export default Register;
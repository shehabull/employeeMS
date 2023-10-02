import { useState } from "react";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("ok");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 login-page">
        <div className=" p-3 rounded w-25 border login-form">
          <div className="text-danger">{error && error}</div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control rounded"
                id="email"
                name="email"
                placeholder="Enter email address"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 rounded-0 mb-1"
            >
              Login
            </button>
            <p>You are agree to our terms and policies</p>
            <button
              type="submit"
              className="btn btn-secondary border w-100 rounded-0"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

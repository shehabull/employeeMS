import React from 'react'



function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 login-page">
        <div className=" p-3 rounded w-25 border login-form">
          <h2>Login</h2>
          <form>
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
              />
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0 mb-1">
              Login
            </button>
            <p>You are agree to our terms and policies</p>
            <button type="submit" className="btn btn-secondary border w-100 rounded-0">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
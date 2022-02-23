import React from "react";

function Main() {
  return (
    <section className="login_form">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 form_text">
            <h1 className="text-align-center align-items-center">Product</h1>
            <p className="text-align-center align-items-center d-md-none">
              Use whenever you want, where ever you want, however you want.
            </p>
          </div>
          <div className="col-md-6">
            <form className="main_from">
              <div className="container form_card">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg text-align-center align-items-center"
                    placeholder="Enter a valid email address"
                    required
                  />
                  <label className="form-label" for="email">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required
                  />
                  <label className="form-label" for="password">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value=""
                      id="checkbox"
                    />
                    <label className="form-check-label" for="checkbox">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-center mt-5 pt-2">
                  <button type="button" className="login_button">
                    Login
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center mx-3 mb-0">Or</p>
                </div>
                <div className="text-center text-lg-center mt-5 pt-2">
                  <button type="button" className=" sign_up_button">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;

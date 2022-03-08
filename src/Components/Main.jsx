import React from "react";

function Main() {
  return (
    <section className="cotainer main ">
      <div className=" h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="container col-md-6 form_text">
            <h1 className="container text-align-center align-items-center pt-5">
              Product
            </h1>
            <p className="container text-align-center align-items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi exercitationem tempore doloribus a hic.{" "}
            </p>
          </div>
          <div className="col-md-6">
            <form className="main_from">
              <div className="container form_card">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control  text-align-center align-items-center"
                    placeholder="Enter email address"
                    required
                  />
                  <label className="form-label pt-3" for="email">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                  <label className="form-label pt-3" for="password">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center secondary_btns">
                  <div className="form-check mt-3 checkbox">
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
                  <a href="#!" className="forgot_password ">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-center m-5 p-2">
                  <button type="button" className="buttons login_button">
                    Login
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center mx-3 mb-0">Or</p>
                </div>
                <div className="text-center text-lg-center m-5 p-2">
                  <button type="button" className="buttons sign_up_button">
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

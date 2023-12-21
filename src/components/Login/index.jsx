import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="header_login">
        <div className="header_login_wrapper">
          <img
            src="images/login_main.png"
            className="login_main_img"
            alt="login_main_img"
          />
          <div className="login_dashboard">
            <div className="login_sign">
              <img
                src="images/twitter_logo.png"
                className="login_dashboard_logo"
                alt="twitter_logo"
              />
              <h1 className="login_title">Happening now</h1>
              <h2 className="login_subtitle">Join Twitter today</h2>
              <div className="login_google">
                <img src="images/google_logo.png" alt="google_logo" />
                Sign up with Google
              </div>
              <div className="login_email">Sign up with email</div>
              <div className="login_privacy">
                By singing up you agree to the{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <span>Terms of Service</span>
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <span>Privacy Policy</span>
                </a>
                , including{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <span>Cookie Use</span>
                </a>
                .
              </div>
              <div className="login_login">
                Already have an account?{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/"
                >
                  <span>Log in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login_footer">
          <a href="https://www.instagram.com/">About</a>
          <a href="https://www.instagram.com/">Help Center</a>
          <a href="https://www.instagram.com/">Terms of Service</a>
          <a href="https://www.instagram.com/">Privacy Policy</a>
          <a href="https://www.instagram.com/">Cookie Policy</a>
          <a href="https://www.instagram.com/">Ads info</a>
          <a href="https://www.instagram.com/">Status</a>
          <a href="https://www.instagram.com/">Carrres</a>
          <a href="https://www.instagram.com/">Brand Resources</a>
          <a href="https://www.instagram.com/">Advertsing</a>
          <a href="https://www.instagram.com/">Marketing</a>
          <a href="https://www.instagram.com/">Twitter for Business</a>
          <a href="https://www.instagram.com/">Developers</a>
          <a href="https://www.instagram.com/">Directory</a>
          <a href="https://www.instagram.com/">Settings</a>
          <a href="https://www.instagram.com/">© 2021 Twitter, Inc.</a>
        </div>
      </div>
    </>
  );
};

export default Login;

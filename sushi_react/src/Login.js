import React from "react";
import "./Login.css";
import KEY from "./assests/images/key.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Login-container">
        <div className="Login-logo"></div>
        <div className="Login-box">
          <div className="Login-slogo">
            <img className="Img-key" src={KEY} alt="key"></img>
          </div>
          <UserName></UserName>
        </div>
      </div>
    );
  }
}

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="UserName-container">
        <div className="input-container">
          <input
            className="input-username"
            type="text"
            name="username"
            placeholder="USERNAME"
          />
        </div>
        <div className="input-container">
          <input
            className="input-username"
            type="password"
            name="password"
            placeholder="PASSWORD"
          />
        </div>
        <div className="input-container">
          <input
            onClick={event => (window.location.href = "/Admin")}
            className="btn-login"
            type="button"
            name="login"
            placeholder="LOGIN"
            value="LOGIN"
          />
        </div>
      </div>
    );
  }
}

export default Login;

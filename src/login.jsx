import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = () => {
    
  }

  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="w-25 mr-3 mb-3">
              <img src="./img/fbpsge.png" class="img-fluid" alt="logo" />
            </div>

            <span class="login100-form-title pb-4">Welcome To Curl Chat</span>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button
                  class="login100-form-btn"
                  onclick="window.location.href='/auth/facebook'"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

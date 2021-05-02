import React, { Component } from "react";
import { Input, Label } from "../Form/Form";
import {Link} from 'react-router-dom'
import AuthApiService from "../../services/auth-api-service";
import EmployeeContext from "../../context/EmployeeContext";
import SpinningLoader from '../../assets/SpinningLoader.svg';
import "./login-form.js";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = EmployeeContext;

  state = { 
    isLoading: false,
    error: null 
  };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({isLoading: true});
    const { user_name, password } = ev.target;
    this.setState({ error: null });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        this.setState({isLoading: false});
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ 
          error: res.error, 
          isLoading: false 
        });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  renderLoading() {
    return (<img src={SpinningLoader} alt="spinning loader"/>)
  }

  renderLoginButton(){
    return (
      <div className="mt-2 mb-2 ml-auto">
        <button className="btn btn-primary" type="submit">
           Login
        </button>
        <Link class="ml-3"to='/register' >Register</Link>
      </div>
    )
  }
  
  render() {
    const { error } = this.state;
    return (
      <form className="form-group col-4 mx-auto" onSubmit={this.handleSubmit}>
        <div className="loginContainer">
          <h2 className="text-center mt-2">Login</h2>
          <div className="loginInput">
            <div className="usernameInput">
              <Label htmlFor="login-username-input" className="username-login">Username : </Label>
              <Input
                ref={this.firstInput}
                id="login-username-input"
                name="user_name"
                required
                />
            </div>
            <div className="passwordInput">
              <Label htmlFor="login-password-input">Password : </Label>
              <Input
                id="login-password-input"
                name="password"
                type="password"
                required
              />
            </div>
            <div role="alert">{error && <p>{error}</p>}</div>
            {this.state.isLoading ? this.renderLoading() : this.renderLoginButton()}  
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;

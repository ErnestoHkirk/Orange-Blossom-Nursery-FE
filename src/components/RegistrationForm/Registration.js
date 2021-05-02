import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import { Link } from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";
import "./Registration.css";

export default class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  static contextType = EmployeeContext;

  handleRegistrationSubmit = ev => {
    ev.preventDefault();
    const { user_name, name, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      employee_username: user_name.value,
      employee_name: name.value,
      employee_password: password.value
    })
      .then(res => {
        name.value = "";
        user_name.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className="form-group"
        onSubmit={this.handleRegistrationSubmit}
      > 
        <h2 className="registerTitle">Register</h2>
        <p className="register-text">Welcome to the Orange Blossom Team</p>
        <div className="registrationInput">
          <div className="usernameInput">
            <label htmlFor="user_name">Username : </label> <br/>
            <input type="text" name="user_name"className="user_name"required/>
          </div>
          <div className="fullNameInput">
            <label htmlFor="name">Name : </label><br/>
            <input
              type="text"
              name="name"
              className="name"
              required
            />
          </div>
          <div className="phoneInput">
            <label htmlFor="phone">Phone : </label><br/>
            <input
              type="text"
              name="phone"
              className="phone"
              required
            />
          </div>
          <div className="passwordInput">
            <label htmlFor="password">Password : </label><br/>
            <input
              type="password"
              name="password"
              className="password"
              required
            />
          </div>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <button
            className="btn btn-primary mt-2 mb-2"
            type="submit"
            name="submit">
            Register
          </button>
          
          <section className="alreadyHaveAccount">
            Already have an account?{" "}
            {
              <Link className="loginLink" to="/login">
                Login Here
              </Link>
            }
          </section>
        </div>
      </form>
    );
  }
}

import React, { Component } from "react";
import LoginForm from "../components/LoginForm/login-form";
import EmployeeContext from "../context/EmployeeContext";

class LoginRoute extends Component {
  static contextType = EmployeeContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    let destination = null;
    destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  render() {
    return (
      <section className="login-container row">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;

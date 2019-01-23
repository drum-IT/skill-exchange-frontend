import React, { Component } from 'react';
import SignupStyles from './styles/SignupStyles';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state;
    const { signUp } = this.props;
    if (firstName && lastName && email && password && password2) {
      signUp(this.state);
    }
  }

  render() {
    const { firstName, lastName, email, password, password2 } = this.state;
    const { changePath } = this.props;
    return (
      <SignupStyles>
        <form className="signup__form" onSubmit={this.handleSubmit}>
          <div className="form__header">
            <h1>Sign Up</h1>
          </div>
          <div className="form__input__wrapper">
            <label htmlFor="firstName" className="form__label">
              First Name
              <input
                className="form__input"
                type="text"
                value={firstName}
                name="firstName"
                placeholder="John"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="lastName" className="form__label">
              Last Name
              <input
                className="form__input"
                type="text"
                value={lastName}
                name="lastName"
                placeholder="Smith"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="email" className="form__label form__label--wide">
              Email
              <input
                className="form__input"
                type="email"
                value={email}
                name="email"
                placeholder="jsmith@email.com"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password" className="form__label">
              Password
              <input
                className="form__input"
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password2" className="form__label">
              Confirm
              <input
                className="form__input"
                type="password"
                value={password2}
                name="password2"
                placeholder="Confirm"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
          <p className="form__sub">
            <button
              className="link"
              type="button"
              onClick={() => changePath('signin', true, 'Sign In')}
            >
              Sign In
            </button>
            instead
          </p>
        </form>
      </SignupStyles>
    );
  }
}

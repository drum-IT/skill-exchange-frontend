import React, { Component } from 'react';
import SignupStyles from './styles/SignupStyles';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
    const { email, password } = this.state;
    const { signIn } = this.props;
    if (email && password) {
      signIn(this.state);
    }
  }

  render() {
    const { email, password } = this.state;
    const { changePath } = this.props;
    return (
      <SignupStyles>
        <form className="signup__form" onSubmit={this.handleSubmit}>
          <div className="form__header">
            <h1>Sign In</h1>
          </div>
          <div className="form__input__wrapper">
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
            <label htmlFor="password" className="form__label form__label--wide">
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
          </div>
          <button className="btn" type="submit">
            Sign In
          </button>
          <p className="form__sub">
            <button
              className="link"
              type="button"
              onClick={() => changePath('signup', true, 'Sign Up')}
            >
              Sign Up
            </button>
            instead
          </p>
        </form>
      </SignupStyles>
    );
  }
}

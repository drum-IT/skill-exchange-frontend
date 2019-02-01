import React, { Component } from 'react';
import './App.css';
import faker from 'faker';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.animals(),
        title: faker.name.jobTitle(),
        phone: faker.phone.phoneNumber()
      },
      path: 'home',
      subpath: undefined,
      location: 'Dashboard'
    };
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.changePath = this.changePath.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signUp(user) {
    const newUser = { ...user };
    newUser.avatar = faker.image.animals();
    newUser.phone = faker.phone.phoneNumber();
    newUser.title = faker.name.jobTitle();
    this.setState({ path: 'home', subpath: undefined, user: newUser });
  }

  signIn(user) {
    const existingUser = { ...user };
    existingUser.firstName = faker.name.firstName();
    existingUser.lastName = faker.name.firstName();
    existingUser.avatar = faker.image.animals();
    existingUser.title = faker.name.jobTitle();
    existingUser.phone = faker.phone.phoneNumber();
    this.setState({ path: 'home', subpath: undefined, user: existingUser });
  }

  signOut() {
    this.setState({ user: undefined, path: 'home', subpath: undefined, location: 'Dashboard' });
  }

  changePath(path, sub, location) {
    if (sub) {
      this.setState({ subpath: path, location });
    } else {
      this.setState({ path, subpath: undefined, location });
    }
  }

  render() {
    const { path, user, subpath, location } = this.state;
    let content;
    if (path === 'signup') {
      content = <Signup signUp={this.signUp} changePath={this.changePath} />;
    } else if (path === 'signin') {
      content = <Signin signIn={this.signIn} changePath={this.changePath} />;
    } else if (path === 'home') {
      content = (
        <Home
          signOut={this.signOut}
          location={location}
          subpath={subpath}
          path={path}
          user={user}
          changePath={this.changePath}
          signIn={this.signIn}
          signUp={this.signUp}
        />
      );
    }
    return <div className="App">{content}</div>;
  }
}

export default App;

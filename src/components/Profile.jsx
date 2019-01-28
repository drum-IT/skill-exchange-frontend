import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileSettings from './ProfileSettings';

const ProfileStyles = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 30px;
  .profile__controls {
    border: 1px solid var(--lightestgrey);
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  .profile__avatar__wrapper {
    border-radius: 5px 5px 0 0;
    height: 300px;
    overflow: hidden;
    width: 100%;
  }
  .profile__avatar {
    border-radius: 5px 5px 0 0;
    height: 100%;
    object-fit: cover;
  }
  .user__details {
    border-bottom: 1px solid var(--lightestgrey);
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  .user__name {
    color: var(--black);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .user__title {
    color: var(--lightgrey);
    font-size: 1.4rem;
  }
  .profile__nav {
    padding: 15px;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
  }
  .profile__control {
    color: var(--grey);
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-radius: 5px;
    background: none;
    border: none;
    font-size: 1.4rem;
    font-weight: 500;
    outline: none;
    transition: all 100ms;
  }
  .active__control {
    background: var(--blue);
    color: white;
  }
  .profile__control:hover {
    background: var(--lightblue);
    color: white;
  }
  .active__control:hover {
    background: var(--blue);
  }
`;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'settings'
    };
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(section) {
    this.setState({ section });
  }

  render() {
    const { user } = this.props;
    const { section } = this.state;
    return (
      <ProfileStyles>
        <div className="profile__controls">
          <div className="profile__avatar__wrapper">
            <img className="profile__avatar" src={user.avatar} alt="" />
          </div>
          <div className="user__details">
            <span className="user__name">{`${user.firstName} ${user.lastName}`}</span>
            <span className="user__title">{user.title}</span>
          </div>
          <div className="profile__nav">
            <button
              type="button"
              onClick={() => this.changeSection('settings')}
              className={`profile__control ${section === 'settings' ? 'active__control' : null}`}
            >
              Account Settings
            </button>
            <button
              type="button"
              onClick={() => this.changeSection('skills')}
              className={`profile__control ${section === 'skills' ? 'active__control' : null}`}
            >
              My Skills
            </button>
            <button
              type="button"
              onClick={() => this.changeSection('security')}
              className={`profile__control ${section === 'security' ? 'active__control' : null}`}
            >
              Security
            </button>
            <button
              type="button"
              onClick={() => this.changeSection('privacy')}
              className={`profile__control ${section === 'privacy' ? 'active__control' : null}`}
            >
              Privacy
            </button>
          </div>
        </div>
        <div className="profile__settings">
          <ProfileSettings user={user} section={section} />
        </div>
      </ProfileStyles>
    );
  }
}

import React from 'react';
import styled from 'styled-components';

const ProfileSettingsStyles = styled.div`
  border-radius: 5px;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  .profile__section {
    display: flex;
    flex-direction: column;
  }
  .profile__section__header {
    border-bottom: 1px solid var(--lightestgrey);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section__header__title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .section__header__subtitle {
    font-size: 1.4rem;
    color: var(--lightgrey);
  }
  .profile__form {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  .profile__form__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
  .profile__input__label {
    font-size: 1.2rem;
    color: var(--grey);
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }
  .profile__input {
    border: 1px solid var(--lightestgrey);
    margin-top: 10px;
    height: 40px;
    font-size: 1.6rem;
    color: var(--black);
    border-radius: 5px;
    outline: none;
    padding: 0 5px;
    background: white;
  }
`;

export default function ProfileSettings(props) {
  const { section, user } = props;
  const { firstName, lastName, email, phone } = user;
  return (
    <ProfileSettingsStyles>
      <div className="profile__section">
        <div className="profile__section__header">
          <span className="section__header__title">Account Settings</span>
          <span className="section__header__subtitle">Edit your name, and contact details.</span>
        </div>
        <form className="profile__form">
          <div className="profile__form__inputs">
            <label className="profile__input__label" htmlFor="firstName">
              FIRST NAME
              <input className="profile__input" type="text" name="firstName" value={firstName} />
            </label>
            <label className="profile__input__label" htmlFor="lastName">
              LAST NAME
              <input className="profile__input" type="text" name="lastName" value={lastName} />
            </label>
            <label className="profile__input__label" htmlFor="email">
              EMAIL
              <input className="profile__input" type="email" name="email" value={email} />
            </label>
            <label className="profile__input__label" htmlFor="phone">
              PHONE NUMBER
              <input className="profile__input" type="text" name="phone" value={phone} />
            </label>
          </div>
          <div className="profile__form__controls" />
        </form>
      </div>
    </ProfileSettingsStyles>
  );
}

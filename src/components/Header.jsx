import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  grid-area: head;
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 85px;
  border-bottom: 1px solid var(--black);
  z-index: 100;
  position: relative;
  .header__title {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black);
  }
  justify-content: space-between;
  padding-right: 30px;
  .header__controls {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 40px;
    align-items: center;
  }

  .header__search label {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    font-size: 1.4rem;
    align-items: center;
    background: white;
    border-radius: 5px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: var(--lightgrey);
  }
  input {
    background: none;
    height: 30px;
    font-size: 1.4rem;
    width: 400px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: var(--black);
  }
  .profile__menu {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: var(--black);
    border: 2px solid var(--black);
    overflow: hidden;
  }
  .profile__image {
    height: 100%;
    /* width: 100%; */
    object-fit: cover;
  }
  @media only screen and (max-width: 785px) {
    .header__search {
      display: none;
    }
  }
`;

export default function Header(props) {
  const { location, user } = props;
  return (
    <HeaderStyles>
      <div className="header__title">{location}</div>
      <div className="header__controls">
        <div className="header__search">
          <label htmlFor="headerSearch">
            <i className="fas fa-search" />
            <input type="text" name="headerSearch" placeholder="Search..." />
          </label>
        </div>
        {user ? (
          <div className="profile__menu">
            <img className="profile__image" src={user.avatar} alt="" />
          </div>
        ) : null}
      </div>
    </HeaderStyles>
  );
}

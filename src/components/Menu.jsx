import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/shuffle.png';

const MenuStyles = styled.div`
  background: var(--black);
  color: white;
  display: grid;
  grid-template-rows: 85px 1fr;
  flex-direction: column;
  grid-area: menu;
  overflow: hidden;
  .menu__list__wrapper {
    overflow-y: scroll;
    padding-bottom: 30px;
  }
  .menu__list__body {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
    margin-top: 10px;
  }
  .logo__container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 85px;
    display: flex;
    align-items: center;
  }
  .logo__text {
    font-size: 1.8rem;
    font-weight: 500;
    padding-left: 30px;
  }
  .logo__icon {
    display: none;
  }
  .menu__list {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  .menu__list:first-child {
    margin-top: 30px;
  }
  .menu__list * {
    font-size: 1.4rem;
  }
  .menu__list__header {
    display: flex;
    align-items: flex-start;
    height: auto;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .menu__list__item {
    height: 40px;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
    color: white;
    background: none;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-left: -10px;
    padding-left: 10px;
    transition: all 100ms;
  }
  .menu__list__item:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
  .active__item {
    color: var(--black);
    background: white;
    border-radius: 5px;
    margin-left: -10px;
    padding-left: 10px;
  }
  .active__item:hover {
    color: var(--black);
    background: white;
  }
  @media only screen and (max-width: 990px) {
    .logo__container {
      justify-content: center;
    }
    .logo__text {
      display: none;
    }
    .logo__icon {
      display: block;
      height: 30px;
      width: 30px;
    }
    .menu__list {
      margin-left: 10px;
    }
    .menu__list__item {
      height: 30px;
      margin-right: 5px;
      border-radius: 5px;
      margin-left: -5px;
      padding-left: 5px;
    }
  }
`;

export default function Menu(props) {
  const { changePath, subpath, user, signOut } = props;
  return (
    <MenuStyles>
      <div className="logo__container">
        <div className="logo">
          <h1 className="logo__text">Skill Exchange</h1>
          <img src={icon} alt="Skill Exchange" className="logo__icon" />
        </div>
      </div>
      <div className="menu__list__wrapper">
        <div className="menu__list">
          <div className="menu__list__header">Menu</div>
          <div className="menu__list__body">
            <button
              type="button"
              className={`menu__list__item ${subpath === undefined ? 'active__item' : undefined}`}
              onClick={() => changePath('home', false, 'Dashboard')}
            >
              Dashboard
            </button>
            <button
              type="button"
              className={`menu__list__item ${subpath === 'projects' ? 'active__item' : undefined}`}
              onClick={() => changePath('projects', true, 'Project Catalog')}
            >
              Projects
            </button>
            <button
              type="button"
              className={`menu__list__item ${subpath === 'skills' ? 'active__item' : undefined}`}
              onClick={() => changePath('skills', true, 'Skill Catalog')}
            >
              Skills
            </button>
          </div>
        </div>
        <div className="menu__list">
          <div className="menu__list__header">{user ? `Hi, ${user.firstName}!` : 'Profile'}</div>
          {!user ? (
            <div className="menu__list__body">
              <button
                type="button"
                className={`menu__list__item ${subpath === 'signup' ? 'active__item' : undefined}`}
                onClick={() => changePath('signup', true, 'Sign Up')}
              >
                Sign Up
              </button>
              <button
                type="button"
                className={`menu__list__item ${subpath === 'signin' ? 'active__item' : undefined}`}
                onClick={() => changePath('signin', true, 'Sign In')}
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="menu__list__body">
              <button
                type="button"
                className={`menu__list__item ${
                  subpath === 'myProfile' ? 'active__item' : undefined
                }`}
                onClick={() => changePath('myProfile', true, 'My Profile')}
              >
                My Profile
              </button>
              <button
                type="button"
                className={`menu__list__item ${
                  subpath === 'myProjects' ? 'active__item' : undefined
                }`}
                onClick={() => changePath('myProjects', true, 'My Projects')}
              >
                My Projects
              </button>
              <button
                type="button"
                className={`menu__list__item ${subpath === 'signup' ? 'active__item' : undefined}`}
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </MenuStyles>
  );
}

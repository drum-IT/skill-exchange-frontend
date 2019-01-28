import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import FeatureList from './FeatureList';
import HighlightList from './HighlightList';
import Signin from './Signin';
import Signup from './Signup';
import Profile from './Profile';

const BodyStyles = styled.div`
  background: var(--offwhite);
  display: grid;
  flex-direction: column;
  grid-area: body;
  grid-template-rows: 85px 1fr;
  grid-template-areas:
    'head'
    'body';
  overflow: hidden;
  .body__wrapper {
    overflow: hidden;
    overflow-y: scroll;
  }
  .body {
    grid-area: body;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
  }
  .section__title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--black);
  }
  @media only screen and (max-width: 680px) {
    .body {
      align-items: center;
    }
  }
`;

export default function Body(props) {
  const { subpath, location, user, signIn, signUp, changePath } = props;
  let content;
  if (subpath === undefined) {
    content = (
      <div className="body">
        <FeatureList />
        <HighlightList />
      </div>
    );
  } else if (subpath === 'signin') {
    content = <Signin changePath={changePath} signIn={signIn} />;
  } else if (subpath === 'signup') {
    content = <Signup changePath={changePath} signUp={signUp} />;
  } else if (subpath === 'myProfile') {
    content = (
      <div className="body">
        <Profile user={user} />
      </div>
    );
  }
  return (
    <BodyStyles>
      <Header user={user} location={location} />
      <div className="body__wrapper">{content}</div>
    </BodyStyles>
  );
}

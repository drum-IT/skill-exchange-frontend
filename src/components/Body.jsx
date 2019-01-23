import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import FeatureList from './FeatureList';
import HighlightList from './HighlightList';
import Signin from './Signin';
import Signup from './Signup';

const BodyStyles = styled.div`
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
  }
  return (
    <BodyStyles>
      <Header user={user} location={location} />
      <div className="body__wrapper">{content}</div>
    </BodyStyles>
  );
}

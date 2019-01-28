import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Body from './Body';

const HomeStyles = styled.div`
  display: grid;
  grid-template-columns: 275px auto;
  grid-auto-flow: column;
  grid-template-areas: 'menu body';
  height: 100vh;
  width: 100vw;
  background: white;
  @media only screen and (max-width: 990px) {
    grid-template-columns: 100px auto;
  }
`;

export default function Home(props) {
  const { changePath, path, subpath, location, user, signIn, signUp, signOut } = props;
  return (
    <HomeStyles>
      <Menu signOut={signOut} changePath={changePath} path={path} subpath={subpath} user={user} />
      <Body
        changePath={changePath}
        signUp={signUp}
        signIn={signIn}
        user={user}
        location={location}
        subpath={subpath}
      />
    </HomeStyles>
  );
}

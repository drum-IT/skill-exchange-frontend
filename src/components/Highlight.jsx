import React from 'react';
import styled from 'styled-components';

const HighlightStyles = styled.div`
  /* border-bottom: 1px solid var(--lightestgrey); */
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: ${props => props.width || '250px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 100ms;
  cursor: pointer;
  .highlight__info {
    margin-bottom: 20px;
  }
  .highlight__image__wrapper {
    border-radius: 5px 5px 0 0;
    height: 200px;
    max-height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .highlight__image {
    pointer-events: none;
    height: 100%;
    object-fit: cover;
    transition: all 250ms ease-out;
  }
  :hover .highlight__info .highlight__details > .highlight__name {
    color: var(--blue);
  }
  .highlight__details {
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: row;
    margin-top: 20px;
    padding: 10px;
  }
  .highlight__name {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--black);
  }
  .highlight__about {
    font-size: 1.6rem;
    color: var(--black);
  }
  .highlight__stats {
    display: flex;
    justify-content: space-between;
    color: var(--grey);
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .highlight__stats span {
    font-size: 1.4rem;
  }
`;

export default function Highlight(props) {
  const { name, image, members, about, status, width } = props;
  return (
    <HighlightStyles width={width}>
      <div className="highlight__info">
        <div className="highlight__image__wrapper">
          <img src={image} alt="" className="highlight__image" />
        </div>
        <div className="highlight__details">
          <div className="highlight__name">{name}</div>
          <div className="highlight__about">{about}</div>
        </div>
      </div>
      <div className="highlight__stats">
        <span>{`${status}`}</span>
        <span>{`${members} members`}</span>
      </div>
    </HighlightStyles>
  );
}

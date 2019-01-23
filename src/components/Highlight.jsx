import React from 'react';
import styled from 'styled-components';

const HighlightStyles = styled.div`
  background: white;
  /* border: 1px solid var(--lightestgrey); */
  border-bottom: 1px solid var(--lightestgrey);
  /* border-radius: 5px; */
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    height: 100%;
    object-fit: cover;
    transition: height 250ms ease-out;
  }
  :hover .highlight__info .highlight__image__wrapper .highlight__image {
    height: 105%;
    object-position: 50% 50%;
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
  .hightlight__about {
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
  const { name, image, members, about, status } = props;
  return (
    <HighlightStyles>
      <div className="highlight__info">
        <div className="highlight__image__wrapper">
          <img src={image} alt="" className="highlight__image" />
        </div>
        <div className="highlight__details">
          <div className="highlight__name">{name}</div>
          <div className="hightlight__about">{about}</div>
        </div>
      </div>
      <div className="highlight__stats">
        <span>{`Status: ${status}`}</span>
        <span>{`${members} members`}</span>
      </div>
    </HighlightStyles>
  );
}

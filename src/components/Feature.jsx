import React from 'react';
import styled from 'styled-components';

const FeatureStyles = styled.div`
  border-radius: 5px;
  background: white;
  border: 1px solid var(--lightestgrey);
  display: flex;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  :hover .feature__name {
    color: var(--blue);
  }
  .feature__image {
    height: 60px;
    width: 80px;
    border-radius: 5px;
  }
  .feature__name {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 10px;
  }
`;

export default function Feature(props) {
  const { name, image } = props;
  return (
    <FeatureStyles>
      <img src={image} alt="" className="feature__image" />
      <div className="feature__name">{name}</div>
    </FeatureStyles>
  );
}

import React from 'react';
import styled from 'styled-components';

const FeatureStyles = styled.div`
  align-items: center;
  cursor: pointer;
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 5px;
  transition: all 100ms;
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

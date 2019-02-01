import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import Feature from './Feature';

const FeatureListStyles = styled.div`
  margin-bottom: 50px;
  margin-right: 55px;
  .feature__list {
    margin-top: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;

export default function FeatureList() {
  const features = [
    { name: 'New Projects', image: faker.image.animals() },
    { name: 'Looking for Members', image: faker.image.animals() },
    { name: 'In Demand Skills', image: faker.image.animals() }
  ];
  return (
    <FeatureListStyles>
      <span className="section__title">Get Started</span>
      <div className="feature__list">
        {features.map(feature => (
          <Feature key={feature.name} name={feature.name} image={feature.image} />
        ))}
      </div>
    </FeatureListStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import Highlight from './Highlight';

const HighlightListStyles = styled.div`
  .highlight__list {
    margin-right: 55px;
    margin-top: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;

export default function HighlightList() {
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed'];
  const highlights = [
    {
      name: faker.commerce.productName(),
      image: faker.image.animals(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.abstract(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.business(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.cats(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.food(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    },
    {
      name: faker.commerce.productName(),
      image: faker.image.nightlife(),
      about: faker.lorem.sentence(),
      members: Math.floor(Math.random() * 100) + 1,
      status: statuses[Math.floor(Math.random() * (statuses.length - 1))]
    }
  ];
  return (
    <HighlightListStyles>
      <span className="section__title">Featured Projects</span>
      <div className="highlight__list">
        {highlights.map(highlight => (
          <Highlight
            name={highlight.name}
            image={highlight.image}
            about={highlight.about}
            members={highlight.members}
            status={highlight.status}
          />
        ))}
      </div>
    </HighlightListStyles>
  );
}

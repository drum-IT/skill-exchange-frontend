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
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed', 'Looking for Members'];
  const highlights = new Array(10).fill(undefined).map(element => ({
    name: faker.commerce.productName(),
    image: faker.image.cats(),
    about: faker.company.catchPhrase(),
    members: Math.floor(Math.random() * 100) + 1,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }));
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
            key={highlight.name}
          />
        ))}
      </div>
    </HighlightListStyles>
  );
}

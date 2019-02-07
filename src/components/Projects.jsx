import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import Highlight from './Highlight';

const ProjectsStyles = styled.div`
  display: grid;
  grid-template-columns: 200px 200px auto;
  grid-gap: 20px;
`;

export default function Projects() {
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed', 'Looking for Members'];
  const highlights = new Array(2).fill(undefined).map(element => ({
    name: faker.commerce.productName(),
    image: faker.image.cats(),
    about: faker.company.catchPhrase(),
    members: Math.floor(Math.random() * 100) + 1,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }));
  return (
    <ProjectsStyles>
      {highlights.map(highlight => (
        <Highlight
          name={highlight.name}
          image={highlight.image}
          about={highlight.about}
          members={highlight.members}
          status={highlight.status}
          key={highlight.name}
          width="200px"
        />
      ))}
    </ProjectsStyles>
  );
}

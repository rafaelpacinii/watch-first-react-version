import styled from "styled-components";

export const GridContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  color: var(--white);
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  h2 {
    grid-row: 1/2;
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
`;

export const CustomSearch = styled.form`
  
`;
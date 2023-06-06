import styled from "styled-components";

export const Container = styled.a`
  max-width: 350px;
  max-height: 514.4px;
  padding: 0.5rem;
  display: flex;
  justify-self: right;
  align-self: center;
  text-align: center;
  text-decoration: none;
  border: 2px solid var(--white);
  color: var(--white);

  transition: color 0.3s;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 5px 1px 30px var(--orange);
    border-color: var(--light-orange);
    color: var(--light-orange);
  }
`;

export const Content = styled.div`
  display: grid;

  img {
    width: 100%;
    grid-row: 1/6;
    grid-column: 1/2;
  }

  h3 {
    grid-row: 5/6;
    grid-column: 1/2;
    background: linear-gradient(
      180deg,
      rgba(44, 44, 44, 0) 0%,
      rgba(22, 22, 22, 0.7579364509475666) 45%,
      rgba(0, 0, 0, 1) 100%
    );
    padding: 1rem 0.25rem;
  }
`;

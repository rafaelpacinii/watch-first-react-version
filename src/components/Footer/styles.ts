import styled from "styled-components";

export const Container = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 2rem;
  color: var(--white);
  background-color: var(--grey);
  display: flex;
  text-align: center;
  justify-content: center;
  flex-flow: row wrap;

  img {
    width: 40px;
  }

  small {
    margin-top: 0.5rem;
    flex-basis: 100%;
  }
`;

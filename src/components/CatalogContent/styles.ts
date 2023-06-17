import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  color: var(--white);

  h2 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  img {
    &.default {
      width: 75px;
      position: fixed;
      top: 50px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }

    &.loading {
      visibility: visible;
    }

    &.loaded {
      visibility: hidden;
    }
  }

  @media (max-width: 650px) {
    h2{
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2%;
  row-gap: 0;
  padding-bottom: 7rem;

  button {
    color: var(--white);
    background-color: var(--orange);
    grid-column: 2/3;
    border: none;
    margin-top: 1rem;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &,
  button {
    color: var(--white);
  }

  .text-container {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p:not(.default-p) {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 3rem;
    }

    .buttons-container {
      max-width: 300px;
      min-width: 255px;
      text-align: center;
      display: flex;
      flex-flow: row wrap;
      gap: 0.75rem;

      & > * {
        flex-basis: 100%;
      }

      button {
        border: none;
        background-color: var(--orange);
        padding: 1.5rem;
        font-size: 1.25rem;

        transition: background-color 0.3s;

        &:hover {
          cursor: pointer;
          background-color: var(--light-orange);
        }
      }
    }
  }
`;

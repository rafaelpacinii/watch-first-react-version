import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 1.5rem;

  .poster-container {
    img {
      width: 100%;
    }

    position: relative;
    background-color: var(--grey);
    flex-basis: calc(92% / 4);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(34, 34, 34);
    h3 {
      padding: 1rem 0.5rem;
      margin: 0;
      font-size: 1.2em;
    }

    p {
      padding: 0 0 1rem 0.5rem;
      font-size: 1em;
      font-weight: lighter;
    }
  }

  @media (max-width: 1050px) {
    .poster-container{
        flex-basis: calc(94% / 3);
    }
  }

  @media (max-width: 850px) {
    .poster-container{
        flex-basis: calc(96% / 2);
    }
  }

  @media (max-width: 650px) {
    .poster-container{
        flex-basis: calc(94% / 3);
    }
  }

  @media (max-width: 480px) {
    .poster-container{
        flex-basis: calc(96% / 2);
    }
  }
`;

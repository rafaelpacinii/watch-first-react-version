import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 4rem 2rem;
`;

export const Content = styled.div`
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .benefits-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    .benefits-content {
      max-width: 360px;
      margin: 0 1rem 1rem 1rem;

      img {
        max-width: 250px;
        width: 100%;
        background-color: var(--orange);
        border-radius: 300px;
      }

      h3 {
        font-size: 2rem;
        font-weight: 400;
      }

      p {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 3rem;
      }
    }
  }
`;

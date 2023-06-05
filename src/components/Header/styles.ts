import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--light-orange);
    }

    h1 {
        font-size: 1.5rem;

        display: flex;
        align-items: center;
    }

    img {
      width: 45px;
      margin-right: 0.5rem;
    }
  }
`;

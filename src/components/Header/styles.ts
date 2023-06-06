import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0 7rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--white);
    text-decoration: none;

    transition: color 0.3s;

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

  nav {
    width: 375px;

    ul {
      padding: 0;
      list-style-type: none;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li:last-child {
        & a {
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background-color: var(--orange);

          transition: background-color 0.3s;

          &:hover {
            color: var(--white);
            background-color: var(--light-orange);
          }
        }
      }
    }
  }
`;

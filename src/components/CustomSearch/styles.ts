import styled from "styled-components";

export const Container = styled.form`
  border: 1px solid rgb(85, 85, 85);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(34, 34, 34);
  width: 300px;
  height: fit-content;
  grid-column: 1/2;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  .custom-search-subtitle-flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 1.5rem;
      color: white;
      border: none;
      background-color: transparent;
      padding: 0.3em 0 0.3em 0.5em;
      border-radius: 5px;

      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        color: #ff5e00;
      }
    }
  }

  .submit-button {
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 100px;
    color: var(--white);
    background-color: var(--orange);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const Container = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  flex-flow: row wrap;
  gap: 0.6rem;

  legend {
    margin-bottom: 0.5rem;
    color: #dbdbdb;
  }

  label {
    display: inline-block;
    padding: 0.15rem 0.5rem;
    border-radius: 100px;
    border: 1px solid white;
    font-size: 1.2rem;

    transition: filter 0.3s;

    &:hover {
      cursor: pointer;
      filter: brightness(1.3);
      user-select: none;
    }
  }

  input {
    display: none;

    &:checked ~ label{
        background-color: var(--orange);
    }
  }
`;

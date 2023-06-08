import styled from "styled-components";

export const Container = styled.form`
  max-width: 400px;

  .close-button {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;

    font-size: 1.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: var(--white);
    color: var(--light-orange);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Content = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;

  h2 {
    flex-basis: 100%;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .inputbox {
    flex-basis: 100%;
    position: relative;
    margin: 1rem 0;
    border-bottom: 2px solid black;
  }

  .inputbox label {
    position: absolute;
    top: 25%;
    left: 5px;
    transform: translateY(-10%);
    pointer-events: none;
    transition: 0.3s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }

  .inputbox input {
    width: calc(100% - 1em);
    height: 50px;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
  }

  .inputbox .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    top: 20px;
  }

  a {
    cursor: pointer;
    font-weight: 500;
    color: var(--light-orange);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    flex-basis: 100%;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: var(--orange);
    border: none;
    border-radius: 3px;
    padding: 0.5rem;
    margin: 1rem 0;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(1.3);
    }
  }

  p {
    font-weight: 100;
  }
`;

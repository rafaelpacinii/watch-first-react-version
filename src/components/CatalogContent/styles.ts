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
    width: 75px;
    position: fixed;
    top: 50px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    
    &.loading {
      visibility: visible;
    }
    
    &.loaded {
      visibility: hidden;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

import styled from "styled-components";

export const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0 7rem 0;
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
    margin-right: auto;
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

  .menu-button {
    display: none;
  }

  @media (max-width: 665px) {
    .menu-button {
      display: block;
      right: 1.25rem;
      top: 0.5rem;
      z-index: 1000;
    }
    .fixed {
      position: fixed;
    }
    .absolute {
      position: absolute;
    }
  }
`;

export const CommonNavStyles = styled.div`
  .mobile-navbar,
  .non-mobile-navbar {
    display: block;

    ul {
      display: flex;
      align-items: center;
      padding: 0;
      list-style-type: none;
      font-size: 1.25rem;

      li:last-child {
        & a {
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

export const NonMobileNav = styled.nav`
  &.non-mobile-navbar {
    width: 375px;
    ul {
      justify-content: space-between;

      li:last-child {
        & a {
          padding: 0.15rem 0.5rem;
        }
      }
    }
  }

  @media (max-width: 665px) {
    &.non-mobile-navbar {
      display: none;
    }
  }
`;

export const MobileNav = styled.nav`
  a {
    cursor: pointer;
    color: var(--white);
    text-decoration: none;

    transition: color 0.3s;

    &:hover {
      color: var(--light-orange);
    }
  }

  &.mobile-navbar {
    max-width: 275px;

    ul {
      flex-flow: row wrap;
      text-align: center;

      li {
        flex-basis: 100%;
        border-top: 1px solid var(--white);
        display: flex;

        &:first-child {
          margin-top: 3rem;
        }

        &:last-child {
          padding-top: 1rem;
        }

        a {
          flex-basis: 100%;
          padding: 1rem 0.5rem;
        }
      }
    }
  }

  @media (min-width: 665px) {
    &.mobile-navbar {
      display: none;
    }
  }
`;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
	--gradient-background: radial-gradient(
    	circle,
   		rgba(76, 76, 76, 1) 0%,
    	rgba(66, 66, 66, 1) 25%,
    	rgba(57, 57, 57, 1) 50%,
    	rgba(54, 54, 54, 1) 75%,
    	rgba(53, 53, 53, 1) 100%
  	);

	--orange: #ff5e00;
	--light-orange: #ff7a2c;

	--grey: rgb(76, 76, 76);
	--white: #ffffff;
	--black: #000000;
    }

    html {
  		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		box-sizing: inherit;
	}

	html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

	body, input, textarea, button {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;

export const GradientBackground = styled.div`
  background: var(--grey);
  background: var(--gradient-background);
`;

export const Padding = styled.div`
    padding: 0 2rem;
`;
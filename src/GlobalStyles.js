import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  #contact {
		scroll-margin-top: 4rem;
	}

  #services, #testimonials {
    scroll-margin-top: 2rem;
  }

  * {
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
    border: none;
    transition: all 0.3s ease-in-out;
    outline: none;
  }


  .Toastify__toast--success {
    background: ${(props) => props.theme.toastSuccessBackground} !important;
    color: ${(props) => props.theme.toastSuccessText} !important;
  }

  .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success {
    background: ${(props) => props.theme.toastSuccessProgressBar} !important;
  }

   #StyledFooter, #StyledServices, #about {
        scroll-margin-top: 5rem;
    }

  
  @media screen and (min-width: 768px) {
    #StyledFooter {
      scroll-margin-top: 5rem;
    }
  }

  .olive {
    background: #CFE0C3;
  }
`;

export default GlobalStyle;

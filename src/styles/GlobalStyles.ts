import { createGlobalStyle } from "styled-components";
import { InterFont } from "utils/font";

export const GlobalStyles = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.White};
    background-color: ${({ theme }) => theme.Black};
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  
  a {
    color: ${({ theme }) => theme.text0}; 
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${InterFont.style.fontFamily}, monospace;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 0px;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  *::-webkit-scrollbar {
    display: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    font-family: ${InterFont.style.fontFamily};
    -moz-appearance: textfield;
  }
`;

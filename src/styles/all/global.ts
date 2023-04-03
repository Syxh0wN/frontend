import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root { 
    
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;
  }

  ul, li, lo{
    list-style: none;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;

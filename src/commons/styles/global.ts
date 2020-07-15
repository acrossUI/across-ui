import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

html, body, #root {
    height: 100%;
  }

body {
  background: ${(props) => props.theme.primary};
  -webkit-font-smoothing: antialiased;
  font: 14px 'Nunito', sans-serif;
}

button: {
    cursor: pointer;
  }

`;
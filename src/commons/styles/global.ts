import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'simplebar/dist/simplebar.min.css';

// variables to override above
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

.simplebar-scrollbar::before {
  background-color: #464969;
}

`;

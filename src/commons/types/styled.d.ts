import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    primary: string;
    secondary: string;
    textInput: string;
    placeholder: string;
    sectionTitle: string;
  }
}

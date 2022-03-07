import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

interface StringMap {
  [key: string]: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: StringMap;
      primary: IPalette;
      secondary: IPalette;
      teal: Array<string>;
      greyScale: Array<string>;
      gradient: Array<string>;
      orange: Array<string>;
      status: StringMap;
    };
    typography: {
      fontFamily: Array<string>;
      fontStyle: Array<string>;
      fontWeight: Array<string>;
      fontSize: StringMap;
    };
    screens: {
      screenSize: StringMap;
    };
  }
}

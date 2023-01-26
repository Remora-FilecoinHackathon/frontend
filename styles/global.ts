import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
  }
  body {
    --primary-color: #34F899;
    --secondary-color: #00C2FF;
    --white-color: #E4E4E4;
    background: #1D1D1D;
    color: var(--white-color);
    position: relative;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
    line-height: 1.5em;
    font-weight: 500;
    text-size-adjust: none;
  }
  a {
    color: var(--secondary-color);
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.primaryVisited};
    }
  }
`;

export default GlobalStyle;

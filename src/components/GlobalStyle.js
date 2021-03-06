import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    /* padding-bottom: 97px; */
    padding-bottom: ${({ isDownloadPage }) => (isDownloadPage ? 0 : '97px')};
     ${({ theme }) => theme.device.tablet} {
      /* padding-bottom: 90px; */
       padding-bottom: ${({ isDownloadPage }) => (isDownloadPage ? 0 : '90px')};
  }
     ${({ theme }) => theme.device.default} {
      padding-bottom: 0px;
  }
   ${({ theme }) => theme.device.desktop} {
      padding-bottom: 0px;
  }

  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a{
      text-decoration:none;
  }
  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

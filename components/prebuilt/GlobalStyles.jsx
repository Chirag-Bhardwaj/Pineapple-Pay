import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
    />
    <Global
      styles={css`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `}
    />
    <Global
      styles={css`
        body,
        html {
          background-image: url('./3.jpg');
          background-repeat: no-repeat;
          background-attachment: cover;
          background-size: cover;
          background-color: #2772e5;
          font-size: 18px;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          padding-top: 40px;
        }
      `}
    />
  </>
);

export default GlobalStyles;

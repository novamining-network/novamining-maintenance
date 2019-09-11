/* eslint-disable react/react-in-jsx-scope */
/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="../static/mstile-144x144.png" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" integrity="sha384-rtJEYb85SiYWgfpCr0jn174XgJTn4rptSOQsMroFBPQSGLdOC5IbubP6lJ35qoM9" crossOrigin="anonymous" />
          <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico" />
          <link rel="icon" type="image/png" href="../static/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="../static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="../static/favicon-96x96.png" sizes="96x96" />
          <link rel="apple-touch-icon" sizes="57x57" href="../static/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="../static/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="../static/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="../static/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="../static/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="../static/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="../static/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="../static/apple-touch-icon-152x152.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

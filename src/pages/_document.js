import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/bootstrap.min.css"
          />
          <script language="javascript" src="/teste.js"></script>
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/bootstrap-theme.min.css"
          />
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <link href="/css/all.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          <script type="text/javascript" src="/js/jquery.js"></script>
          <script type="text/javascript" src="/js/anim_jquery.js"></script>

          <link
            rel="stylesheet"
            type="text/css"
            href="https://www.visualcv.com/less/monte?%40header-font=rasa"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

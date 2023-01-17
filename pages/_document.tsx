import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content="#FFFAF3" />
          <meta name="robots" content="noindex" />
          <link key="favicon" rel="icon" href="/favicon.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://fonts.google.com/share?selection.family=Lobster%7CNoto%20Sans:wght@400;500;600;700

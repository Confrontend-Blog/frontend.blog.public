import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import { ReactNode } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: JSX.IntrinsicAttributes) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Stay up-to-date with the latest trends and techniques in JavaScript development. Our tech blog covers topics like React, Node.js, TypeScript, and more."
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

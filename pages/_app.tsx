import { AppGlobalStyle } from "@/styles/global.styled";
import "../styles/quill.snow.css";
import type { AppProps } from "next/app";
import Layout from "@/components/shared/layout/layout";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme as DefaultTheme}>
        <AppGlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

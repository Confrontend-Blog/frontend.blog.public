import { AppGlobalStyle } from "@/styles/global.styled";
import "../styles/quill.snow.css";
import type { AppProps } from "next/app";
import Layout from "@/components/shared/layout/layout";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { DataContextProvider } from "@/api/context/data.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme as DefaultTheme}>
        <DataContextProvider>
          <AppGlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataContextProvider>
      </ThemeProvider>
    </>
  );
}

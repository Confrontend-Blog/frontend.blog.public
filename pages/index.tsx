import { lazy, StrictMode, Suspense } from "react";
import { NonIdealState } from "../components/shared/non-ideal-state/non-ideal-state";
import Layout from "../components/shared/layout/layout";
import { GlobalStyle } from "../App.styled";

import Blog from "./blog-page";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <Blog />
      </Layout>
    </div>
  );
}

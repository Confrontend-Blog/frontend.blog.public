import { lazy, StrictMode, Suspense } from "react";
import { NonIdealState } from "../components/shared/non-ideal-state/non-ideal-state";
import Layout from "../components/shared/layout/layout";
import { GlobalStyle } from "../styles/App.styled";

import Blog from "../components/blog/blog-page";

export default function Home() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

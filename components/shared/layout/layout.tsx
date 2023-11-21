import { ReactNode, use } from "react";
import { Navigation } from "../navigation/navigation";
import GithubSrc from "../../../public/GitHub-Mark-Light-32px.png";
import * as S from "./layout.styled";
import Image from "next/image";
import { INavigation } from "../../shared/navigation/navigation.types";
import Link from "next/link";
import { Footer } from "../footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Home: INavigation = {
  displayName: "Confrontend",
  route: "/",
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <Navigation
        navMenuItems={[Home]}
        rightSideItems={
          <Link
            key="github-link"
            href="https://github.com/Confrontend"
            target="_blank"
            rel="noreferrer"
          >
            <Image key="github-icon" src={GithubSrc} alt="my github" />
          </Link>
        }
      />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
function useRoute() {
  throw new Error("Function not implemented.");
}

import { ReactNode } from "react";
import { Navigation } from "../navigation/navigation";
import GithubSrc from "../../../public/GitHub-Mark-Light-32px.png";
import * as S from "./layout.styled";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <Navigation
          navMenuItems={undefined}
          rightSideItems={
            <a
              href="https://github.com/Confrontend"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={GithubSrc} alt="my github" />
            </a>
          }
        />
      </S.Navigation>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

export default Layout;

import Link from "next/link";
import * as S from "./footer.styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterNav>
        &copy; {new Date().getFullYear()} Confrontend. All Rights Reserved.
        <Link href="/imprint">Imprint</Link>
      </S.FooterNav>
    </S.FooterWrapper>
  );
};

export { Footer };

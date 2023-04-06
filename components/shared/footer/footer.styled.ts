import Link from "next/link";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  border-top: 1px solid ${({ theme }) => theme.palette.divider}; ;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

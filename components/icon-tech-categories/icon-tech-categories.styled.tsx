import { SiTypescript } from "react-icons/si";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.info.main};
  position: absolute;
  z-index: -1;
  height: 2.5em;
  width: 2.5em;
  border-radius: 100%;
`;

export const StyledSiTypescript = styled(SiTypescript)`
  position: absolute;
`;

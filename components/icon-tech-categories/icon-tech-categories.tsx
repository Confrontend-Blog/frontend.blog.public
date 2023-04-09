import React from "react";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiCsswizardry,
  SiWebpack,
  SiCypress,
  SiAngular,
  SiMicrosoftazure,
  SiIntellijidea,
  SiBabel,
  SiKubernetes,
  SiVisualstudio,
} from "react-icons/si";

import * as S from "./icon-tech-categories.styled";

const IconTwoLetter = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper></S.IconWrapper>
      <SiTypescript size='22' color="#202125"/>
    </S.Wrapper>
  );
};

export { IconTwoLetter };

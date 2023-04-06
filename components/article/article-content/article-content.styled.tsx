import styled from "styled-components";

export const ArticleWrapper = styled.article`
  display: grid;
  grid-template-areas:
    "title title"
    "author category"
    "date date"
    "content content";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(4)} auto;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Author = styled.p`
  grid-area: author;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Category = styled.p`
  grid-area: category;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Date = styled.p`
  grid-area: date;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1.fontWeight};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Content = styled.div`
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  grid-area: content;
`;
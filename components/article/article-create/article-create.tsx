import { useState } from "react";
import * as S from "./article-create.styled";
import { CuiButton } from "../../shared/button/cui-button";
import debounce from "lodash/debounce";
import { Autocomplete, TextField } from "@mui/material";
import { titleToSlug, truncateString } from "@/utils/string.util";
import { createArticle } from "@/api/clients/create-article";
import { convertToMarkdown } from "@/utils/markdown.util";

interface ArticleCreateProps {
  cancelCb: () => void;
}

const modules = {
  clipboard: {
    matchVisual: false,
  },
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

/**TODO fetch dynamically */
const categories = [
  "Frontend",
  "Fullstack",
  "Database",
  "DevOps",
  "Cloud",
  "Security",
  "Mobile",
  "AI",
  "ML",
  "Blockchain",
  "Gaming",
  "Testing",
  "UX",
  "Version Control",
];

export const ArticleCreate = ({ cancelCb }: ArticleCreateProps) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const updateSlug = debounce((title) => {
    setSlug(titleToSlug(title));
  }, 500);

  const onBodyChange = (value: string) => {
    console.log(value);

    setContent(value);
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    updateSlug(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const markdown = convertToMarkdown(content);

    console.log(markdown);
    

    event.preventDefault();
    const summary = truncateString(markdown);
    createArticle({
      title,
      slug,
      content: markdown,
      category,
      summary,
      date: new Date().toISOString(),
      author: "H",
    })
      .then(console.log)
      .catch(console.log);
  };

  return (
    <S.ArticleCreateContainer>
      <S.Header>
        <span>Create new post</span>
        <span>Author</span>
      </S.Header>
      <form onSubmit={onSubmit}>
        <S.StyledTextField
          fullWidth
          variant="filled"
          label="Title"
          value={title}
          onChange={onTitleChange}
          required
        />
        <S.Slug>
          {!slug ? "Slug is auto generated based on title" : slug}
        </S.Slug>
        <S.StyledAutocomplete
          fullWidth
          defaultValue={categories[0]}
          PopperComponent={S.AutocompletePopper}
          value={category}
          onChange={(event, newValue) => {
            setCategory(newValue?.toString() || "");
          }}
          options={categories}
          renderInput={(params) => (
            <S.StyledTextField
              {...params}
              label="Category"
              variant="filled"
              required
            />
          )}
        />
        <S.StyledReactQuill
          modules={modules}
          value={content}
          onChange={onBodyChange}
        />

        <S.Footer>
          <span>
            <CuiButton
              bgColor="#222"
              disabled={!title || !content || !slug || !category}
            >
              Create
            </CuiButton>
            <CuiButton bgColor="#222" onClick={cancelCb}>
              Cancel
            </CuiButton>
          </span>
        </S.Footer>
      </form>
    </S.ArticleCreateContainer>
  );
};

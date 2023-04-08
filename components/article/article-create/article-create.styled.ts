import {
  Autocomplete,
  TextField,
  autocompleteClasses,
  Popper,
} from "@mui/material";
import dynamic from "next/dynamic";

import styled from "styled-components";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const v = {
  bg: "#eee",
  color: "#222",
};

export const ArticleCreateContainer = styled.div`
  background-color: ${v.bg};
  color: ${v.color};
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.5em;
  padding: 1em;
  form > * {
    margin-bottom: 1em;
  }
`;

export const Header = styled.div`
  border-radius: 1em 1em 0 0;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  height: 3em;
  line-height: 2em;
  vertical-align: middle;
`;

export const StyledTextField = styled(TextField)``;

export const SummaryQuill = styled(ReactQuill)`
  background-color: ${v.bg};
  border: none !important;
  .ql-container {
    border: none !important;
    .ql-editor {
      font-size: 1.2em;
      color: ${v.color};
      border: none !important;
    }
  }
  .ql-toolbar {
    z-index: 1;
    position: sticky;
    top: 0;
    background-color: ${v.bg};
    border: none !important;
    border-bottom: 1px solid ${v.color} !important;
  }
`;

export const ContentQuill = styled(ReactQuill)`
  background-color: ${v.bg};
  border: none !important;
  .ql-container {
    border: none !important;
    .ql-editor {
      font-size: 1.2em;
      height: 40vh;
      color: ${v.color};
      border: none !important;
    }
  }
  .ql-toolbar {
    z-index: 1;
    position: sticky;
    top: 0;
    background-color: ${v.bg};
    border: none !important;
    border-bottom: 1px solid ${v.color} !important;
  }
`;

export const Slug = styled.div`
  color: ${v.color};
  font-size: smaller;
`;

export const Summary = styled(ReactQuill)`

`;

export const ReactQuillWrapper = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  vertical-align: middle;
  border-top: 1px solid ${v.color} !important;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiInputBase-root {
    background-color: ${v.bg};
  }
`;

export const AutocompletePopper = styled(Popper)`
  .${autocompleteClasses.listbox} {
    font-size: 0.9em;
  }
`;

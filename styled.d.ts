import { Theme as MuiTheme } from "@mui/material/styles";

import "styled-components";

import type { CustomizedMuiThemeType } from "./styles/theme";
declare module "styled-components" {
  export interface DefaultTheme extends CustomizedMuiThemeType, MuiTheme {}
}

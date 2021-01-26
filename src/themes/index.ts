import { createMuiTheme } from '@material-ui/core/styles';
import overrides from "./overrides";
import palette from "./palette";
import typography from "./typography"

export const theme = createMuiTheme({
  palette,
  overrides,
//   breakpoints,
  typography,
//   shape
});
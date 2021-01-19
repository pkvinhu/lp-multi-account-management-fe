import { createMuiTheme } from '@material-ui/core/styles';
import overrides from "./overrides";
import palette from "./palette";

export const theme = createMuiTheme({
  palette,
  overrides,
//   breakpoints,
//   typography,
//   shape
});
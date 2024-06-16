import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMyTheme } from "./theme/theme";
import { CustomRouter } from "@/routes/routes.tsx";

export function App() {
  const theme = useMyTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomRouter />
    </ThemeProvider>
  );
}

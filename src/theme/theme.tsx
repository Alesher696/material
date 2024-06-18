import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const lightScrollbarStyles = {
  scrollbarColor: "#c1c1c1 #f1f1f1",
  scrollbarWidth: "thin" as const,
  "&::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#c1c1c1",
    borderRadius: "10px",
    border: "3px solid #f1f1f1",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#e0e0e0",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },
};

const darkScrollbarStyles = {
  scrollbarColor: "#6b6b6b #2b2b2b",
  scrollbarWidth: "thin" as const,
  "&::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#6b6b6b",
    borderRadius: "10px",
    border: "3px solid #2b2b2b",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#a0a0a0",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#2b2b2b",
  },
};

// const darkScrollbarStyles = {
//   scrollbarColor: "#6b6b6b #2b2b2b",
//   scrollbarWidth: "thin" as const,
//   "&::-webkit-scrollbar": {
//     width: "12px",
//     height: "12px",
//   },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: "rgba(203, 225, 255, 0.17)",
//     borderRadius: "10px",
//   },
//   "&::-webkit-scrollbar-thumb:hover": {
//     backgroundColor: "rgba(203,225,255,0.24)",
//   },
//   "&::-webkit-scrollbar-track": {
//     backgroundColor: "rgba(185, 215, 255, 0.08)",
//   },
// };

export function useMyTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
        dark: "#111",
      },
      error: {
        main: red.A400,
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 770,
        laptop: 1200,
        desktop: 1920,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          body: prefersDarkMode ? "gray" : "white",
          ...(prefersDarkMode ? darkScrollbarStyles : lightScrollbarStyles),
          color: "white",
        }),
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1em",
            backgroundColor: "#556cd6",
            color: "white",
            "&:hover": {
              backgroundColor: prefersDarkMode ? "#4255a8" : "#556cd6",
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {},
        },
      },
    },
  });
}

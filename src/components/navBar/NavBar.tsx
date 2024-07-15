import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode, useState } from "react";
import { navBarItems } from "@/components/navBar/navBarItems/navBarItems.ts";
import { ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("mobile")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface IProps {
  children: ReactNode;
}

export const NavBar = ({ children }: IProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const lastIcon = navBarItems[navBarItems.length - 1];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinkHandle = (href: string, index: number) => {
    navigate(href);
    setSelectedIndex(index);
  };

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Drawer
              variant="permanent"
              open={open}
              onMouseEnter={handleDrawerOpen}
              onMouseLeave={handleDrawerClose}
          >
            <List
                sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              {navBarItems.slice(0, -1).map((item, index) => (
                  <ListItem
                      key={`${item.id} key`}
                      disablePadding
                      sx={{ display: "block" }}
                      onClick={() => navLinkHandle(item.route, index)}
                  >
                    <ListItemButton
                        selected={selectedIndex === index}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                    >
                      <ListItemIcon
                          sx={{
                            minWidth: 0,
                            width: 50,
                            height: 50,
                            backgroundColor:
                                selectedIndex === index ? item.color : "#556cd6",
                            borderRadius: "10px",
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow:
                                selectedIndex === index
                                    ? `0px 0px 35px 7px ${item.color}`
                                    : "",
                            "&:hover": {
                              backgroundColor: item.color,
                            },
                          }}
                      >
                        <item.icon />
                      </ListItemIcon>
                      <ListItemText
                          primary={item.label}
                          sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
              ))}
              <ListItem
                  key={`${navBarItems[navBarItems.length - 1].id} key`}
                  disablePadding
                  sx={{ display: "block", mt: "auto" }}
                  onClick={() => setSelectedIndex(null)}
              >
                <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                >
                  <ListItemIcon
                      sx={{
                        minWidth: 0,
                        width: 50,
                        height: 50,
                        backgroundColor: "#556cd6",
                        borderRadius: "10px",
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: lastIcon.color,
                        },
                      }}
                  >
                    <lastIcon.icon />
                  </ListItemIcon>
                  <ListItemText
                      primary={navBarItems[navBarItems.length - 1].label}
                      sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </ThemeProvider>
  );
};

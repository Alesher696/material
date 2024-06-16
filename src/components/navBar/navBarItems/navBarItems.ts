import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
export const navBarItems = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Home",
    route: "/",
    color: "#55d689",
  },
  {
    id: 2,
    icon: MailIcon,
    label: "Message",
    route: "/mail",
    color: "#bad655",
  },
  {
    id: 3,
    icon: MusicNoteIcon,
    label: "Music",
    route: "/music",
    color: "#d65555",
  },
  {
    id: 4,
    icon: SettingsIcon,
    label: "Settings",
    route: "/settings",
    color: "#ab55d6",
  },
];

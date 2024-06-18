import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Paper,
  useMediaQuery,
} from "@mui/material";
import background from "@/assets/images/background2.jpeg";
import { useTheme } from "@mui/material/styles";

const paperMobileStyle = {
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: "rgba(33,33,33,0)",
};

const paperStyle = {
  height: "600px",
  width: "356px",
  borderRadius: "20px",
  backgroundColor: "rgba(33,33,33,0)",
  position: "absolute",
  right: 200,
};

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("mobile"));

  const [imageLoaded, setImageLoaded] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setBackgroundStyle({
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      });
    };
    img.src = background;
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        ...backgroundStyle,
      }}
    >
      {!imageLoaded && (
        <Box sx={boxStyle}>
          <CircularProgress color="primary" />
        </Box>
      )}
      {imageLoaded && (
        <Paper
          elevation={12}
          sx={isMobile ? paperMobileStyle : paperStyle}
        ></Paper>
      )}
    </Container>
  );
};

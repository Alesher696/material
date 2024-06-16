import { useState, useEffect } from "react";
import { Box, CircularProgress, Container, Paper } from "@mui/material";
import background from "@/assets/images/background2.jpeg";

export const LoginPage = () => {
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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
      {imageLoaded && (
        <Paper
          elevation={12}
          sx={{
            height: "600px",
            width: "356px",
            borderRadius: "20px",
            backgroundColor: "rgba(33,33,33,0)",
            position: "absolute",
            right: 200,
          }}
        ></Paper>
      )}
    </Container>
  );
};

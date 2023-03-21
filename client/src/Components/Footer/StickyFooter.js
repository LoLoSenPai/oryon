import * as React from "react";
import "./StickyFooter.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Oryon Merch
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container className="container-icons" maxWidth="sm">
          <Typography variant="body1">
            <a
              href="https://discord.gg/fRgWtfj2wd"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-discord discord"></i>
            </a>
            <a
              href="https://twitter.com/OryonMerch"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/loic_dlugosz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram instagram"></i>
            </a>
          </Typography>
          <div className="copyright">
            <Copyright />
          </div>
        </Container>
      </Box>
    </Box>
  );
}

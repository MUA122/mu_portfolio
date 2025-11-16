import { Box, CssBaseline, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HomeSection } from "./component/Home";
import { Education } from "./component/edu";
import { ExpSection } from "./component/exp";
import { ProSection } from "./component/Project";
import { SkillSection } from "./component/Ski";
import { ContactSection } from "./component/Contact";

export function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 999,
          background: "rgba(11, 18, 32, 0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <MenuIcon
          sx={{
            fontSize: 32,
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { color: "#6366f1" },
          }}
          onClick={() => {}}
        />

        <Box
          sx={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 18,

            "& a": {
              textDecoration: "none",
              color: "#e2e8f0",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                color: "#6366f1",
              },
            },
          }}
        >
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#020613",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <HomeSection />

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 6 }} />

        <Education />

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 6 }} />

        <ExpSection />
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 6 }} />
        <SkillSection />
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 6 }} />

        <ProSection />
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 6 }} />
        <ContactSection />
      </Box>
    </>
  );
}

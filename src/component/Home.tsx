import { Box, Typography, Button } from "@mui/material";
import myPic from "../assets/myPic.png";

export function HomeSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 80px",
        boxSizing: "border-box",
        bgcolor: "#020613",
        color: "white",
      }}
    >
      <Box
        sx={{
          flex: "1 1 300px",
          maxWidth: 400,
          bgcolor: "#020617",
          borderRadius: 4,
          padding: 3,
          border: "1px solid rgba(148, 163, 184, 0.4)",
          boxShadow: "0 20px 40px rgba(15,23,42,0.7)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "#6366f1",
            boxShadow: "0 25px 60px rgba(37,99,235,0.35)",
          },
        }}
      >
        <Typography variant="h6" sx={{ color: "gray" }}>
          Hi, I'm
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Mahmoud Usama
        </Typography>

        <Typography variant="h5" sx={{ color: "#6366f1", fontWeight: 600 }}>
          Frontend Developer & Computer Science Student
        </Typography>

        <Typography variant="body1" sx={{ color: "#4b5563" }}>
          I build clean, modern user interfaces using React and focus on writing
          readable, maintainable code. I'm passionate about web development,
          UI/UX, and always improving my skills.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Button
            variant="contained"
            href="https://drive.google.com/file/d/1qkHOQYBpiwUv0yvQWp0LQxPrjoNtNgJM/view?usp=sharing"
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: "999px",
              paddingX: 3,
            }}
          >
            Show CV
          </Button>

          <Button
            variant="outlined"
            href="#contact"
            sx={{
              textTransform: "none",
              borderRadius: "999px",
              paddingX: 3,
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
      <Box>
        <img
          src={myPic}
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            objectFit: "fill",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "1 1 300px",
          maxWidth: 400,
          bgcolor: "#020617",
          borderRadius: 4,
          padding: 3,
          border: "1px solid rgba(148, 163, 184, 0.4)",
          boxShadow: "0 20px 40px rgba(15,23,42,0.7)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: "#22c55e",
            boxShadow: "0 25px 60px rgba(34,197,94,0.35)",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 1, color: "#22c55e" }}
        >
          About Me
        </Typography>

        <Typography variant="body2" sx={{ color: "#f4f4f4ff" }}>
          • Location: Cairo, Egypt
        </Typography>
        <Typography variant="body2" sx={{ color: "#f4f4f4ff" }}>
          • Focus: React & Frontend
        </Typography>
        <Typography variant="body2" sx={{ color: "#f4f4f4ff" }}>
          • Interested in: UI/UX, web apps, clean code
        </Typography>
      </Box>
    </Box>
  );
}

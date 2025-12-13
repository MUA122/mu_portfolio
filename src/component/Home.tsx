import { Box, Typography, Button } from "@mui/material";
import myPic from "../assets/myPic2.png";

export function HomeSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",

        flexDirection: { xs: "column", md: "row" },

        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },

        padding: { xs: "24px 16px", sm: "32px 24px", md: "40px 80px" },

        boxSizing: "border-box",
        bgcolor: "#020613",
        color: "white",

        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Card */}
      <Box
        sx={{
          flex: "1 1 300px",
          maxWidth: 400,
          width: { xs: "90%", md: "auto" },
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

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
          }}
        >
          Mahmoud Usama
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#6366f1",
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Frontend Developer & Computer Science Student
        </Typography>

        <Typography variant="body1" sx={{ color: "#4b5563" }}>
          I build clean, modern user interfaces using React and focus on writing
          readable, maintainable code. I'm passionate about web development,
          UI/UX, and always improving my skills.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: 2,

            flexDirection: { xs: "column", sm: "row" },

            "& a, & button": { width: { xs: "100%", sm: "auto" } },
          }}
        >
          <Button
            variant="contained"
            href="https://drive.google.com/file/d/1elWIOHvZdpeInNE1dcOe3DB05CuJSKqE/view?usp=drive_link"
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

      {/* Center Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: "0 0 auto",

          mx: { xs: 0, md: 4 },
        }}
      >
        <Box
          component="img"
          src={myPic}
          alt="Mahmoud Usama"
          sx={{
            width: { xs: 220, sm: 280, md: 400 },
            height: { xs: 220, sm: 280, md: 400 },
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Right Card */}
      <Box
        sx={{
          flex: "1 1 300px",
          maxWidth: 400,
          width: { xs: "90%", md: "auto" },
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

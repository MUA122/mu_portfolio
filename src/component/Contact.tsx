import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function ContactSection() {
  return (
    <>
      <Box
        id="contact"
        sx={{
          padding: "80px 80px",
          bgcolor: "#020613",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Contact Me
        </Typography>

        <Typography sx={{ color: "#9ca3af", mb: 5 }}>
          Feel free to reach out to me through any of the following methods.
        </Typography>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <LinkedInIcon
            sx={{
              cursor: "pointer",
              fontSize: 40,
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#6366f1",
                boxShadow: "0 25px 60px rgba(37,99,235,0.35)",
                color: "#6366f1",
              },
            }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mahmoud-usama-1766b6372/",
                "_blank"
              );
            }}
          />

          <MailIcon
            sx={{
              cursor: "pointer",
              fontSize: 40,
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#b333b7ff",
                boxShadow: "0 25px 60px rgba(235, 37, 232, 0.35)",
                color: "#b333b7ff",
              },
            }}
            onClick={() => {
              window.location.href = "mailto:mahmoudusama44@gmail.com";
            }}
          />
          <WhatsAppIcon
            sx={{
              cursor: "pointer",
              fontSize: 40,
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#40b733ff",
                boxShadow: "0 25px 60px rgba(83, 235, 37, 0.35)",
                color: "#40b733ff",
              },
            }}
            onClick={() => {
              window.open("https://wa.me/01110425333", "_blank");
            }}
          />
        </Box>
      </Box>
    </>
  );
}

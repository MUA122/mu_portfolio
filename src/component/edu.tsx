import { Box, Typography, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export function Education() {
  return (
    <Box
      id="education"
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
        Education
      </Typography>

      <Typography sx={{ color: "#9ca3af", mb: 5 }}>
        A quick overview of my academic journey.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* University */}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(34,197,94,0.15)",
              }}
            >
              <ApartmentIcon sx={{ color: "#22c55e" }} />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                El Sewedy University of Technology
              </Typography>
              <Typography sx={{ color: "#9ca3af", fontSize: 14 }}>
                B.Sc. in Computer Science • 2023 – Present
              </Typography>
            </Box>
          </Box>

          <Chip
            label="GPA: 3.3 • Dual Degree"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
            }}
          />

          <Box sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#e5e7eb", lineHeight: 1.7 }}
            >
              Building a strong foundation in{" "}
              <b>algorithms, data structures, software engineering,</b> and data
              analysis. Studying through a <b>dual degree</b> program with Amity
              University Dubai.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                mt: 1.5,
                fontSize: 13,
              }}
            >
              Key courses: Web Development, Operating Systems, Databases, Data
              Analysis.
            </Typography>
          </Box>
        </Box>
        {/* School */}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(79, 70, 229, 0.15)",
              }}
            >
              <SchoolIcon sx={{ color: "#6366f1" }} />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                HST School for Applied Technology
              </Typography>
              <Typography sx={{ color: "#9ca3af", fontSize: 14 }}>
                Artificial Intelligence Department • 2020 – 2023
              </Typography>
            </Box>
          </Box>

          <Chip
            label="High School • AI Track"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(27, 27, 136, 0.52)",
              color: "#e5e6ebff",
              fontSize: 12,
            }}
          />

          <Box sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#e5e7eb", lineHeight: 1.7 }}
            >
              Graduated with a <b>95% score and ranked 1st</b> in the school.
              Focused on robotics and embedded systems, building{" "}
              <b>landmine-detection and face-recognition robots</b>.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 1.5,
                color: "#9ca3af",
                fontSize: 13,
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">
                1st place in Arduino Competition • RoboCup Egypt Top 10
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

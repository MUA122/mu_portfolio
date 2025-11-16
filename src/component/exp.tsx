import { Box, Chip, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export function ExpSection() {
  return (
    <>
      <Box
        id="experience"
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
          Experiences
        </Typography>

        <Typography sx={{ color: "#9ca3af", mb: 5 }}>
          A quick overview of my Experiences.
        </Typography>

        {/* {cards} */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Tick and Talk */}
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
              gap: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#c52222ff",
                boxShadow: "0 25px 60px rgba(197, 34, 34, 0.35)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <SmartToyIcon sx={{ color: "#c52222ff" }} />
              Tick & Talk — Frontend Intern
            </Typography>
            <Chip
              label="(July 2025 – Present)"
              sx={{
                alignSelf: "flex-start",
                mt: 1,
                bgcolor: "rgba(197, 34, 34, 0.15)",
                color: "#f7bbbbff",
                fontSize: 12,
                mb: 1,
              }}
            />
            <Typography variant="body2">
              Frontend Intern focused on building reusable UI components and
              improving the overall user experience. Contributed to performance
              optimization and UI/UX refinement across the web app.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                mt: 1.5,
                fontSize: 13,
              }}
            >
              <strong>Achievements:</strong> Built reusable React components
              improving UI/UX by 10%, and delivered 75+ design/features boosting
              product usability.
            </Typography>
          </Box>
          {/* E-Finance */}
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
              gap: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "#0ea5e9",
                boxShadow: "0 25px 60px rgba(14,165,233,0.35)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <QueryStatsIcon sx={{ color: "#0ea5e9" }} />
              E-Finance — Data Analyst Intern
            </Typography>

            <Chip
              label="(July 2024 – September 2024)"
              sx={{
                alignSelf: "flex-start",
                mt: 1,
                bgcolor: "rgba(14,165,233,0.15)",
                color: "#bae6fd",
                fontSize: 12,
                mb: 1,
              }}
            />

            <Typography variant="body2">
              Data Analyst Intern focused on cleaning and transforming datasets
              and building interactive Power BI dashboards to support
              data-driven decisions.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                mt: 1.5,
                fontSize: 13,
              }}
            >
              <strong>Achievements:</strong> Built Power BI dashboards that
              improved data visibility and helped streamline decision-making for
              stakeholders.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

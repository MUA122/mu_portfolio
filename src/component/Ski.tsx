import { Box, Chip, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function SkillSection() {
  return (
    <>
      {" "}
      <Box
        id="skills"
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
          Skills
        </Typography>

        <Typography sx={{ color: "#9ca3af", mb: 5 }}>
          A quick overview of my skills.
        </Typography>
        {/* Skills List */}
        {/* {Frontend Skills} */}
        <Box sx={{ display: "row" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              background: "linear-gradient(90deg, #ffffff, #4ade80, #22c55e)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Frontend Skills
            <ArrowDownwardIcon sx={{ color: "#4ade80", ml: 1 }} />
          </Typography>
          <br />
          <Chip
            label="REACT"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
            }}
          />
          <Chip
            label="Material-UI"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="Tailwind CSS"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="Bootstrap"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="HTML"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="CSS"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="JavaScript"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="Responsive Design"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="UI/UX Principles"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              bgcolor: "rgba(34,197,94,0.15)",
              color: "#bbf7d0",
              fontSize: 12,
              ml: 1,
            }}
          />
        </Box>
        {/* programming skills */}
        <Box sx={{ display: "row", mt: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              background: "linear-gradient(90deg, #ffffff, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Programming Skills
            <ArrowDownwardIcon sx={{ ml: 1, color: "#60a5fa" }} />
          </Typography>
          <br />
          <Chip
            label="Python"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
              fontSize: 12,
            }}
          />
          <Chip
            label="PHP (intermediate)"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="Java (basic)"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="C++ (basic)"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="OOP"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
              fontSize: 12,
              ml: 1,
            }}
          />
        </Box>
        {/* database */}
        <Box sx={{ display: "row", mt: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              background: "linear-gradient(90deg, #ffffff, #c084fc, #a855f7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Database Skills
            <ArrowDownwardIcon sx={{ ml: 1, color: "#a855f7" }} />
          </Typography>
          <br />
          <Chip
            label="MongoDB"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(192, 132, 252, 0.18)",
              color: "#e9d5ff",

              fontSize: 12,
            }}
          />
          <Chip
            label=" MySQL"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(192, 132, 252, 0.18)",
              color: "#e9d5ff",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="SQL Server (basic)"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(192, 132, 252, 0.18)",
              color: "#e9d5ff",
              fontSize: 12,
              ml: 1,
            }}
          />
        </Box>
        {/* Software & Tools */}
        <Box sx={{ display: "row", mt: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              background: "linear-gradient(90deg, #ffffff, #fb923c, #f97316)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Software & Tools Skills
            <ArrowDownwardIcon sx={{ ml: 1, color: "#f97316" }} />
          </Typography>
          <br />
          <Chip
            label="Microsoft Power BI"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(251, 146, 60, 0.18)",
              color: "#fed7aa",

              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label=" Git"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(251, 146, 60, 0.18)",
              color: "#fed7aa",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="GitHub"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "rgba(251, 146, 60, 0.18)",
              color: "#fed7aa",
              fontSize: 12,
              ml: 1,
            }}
          />
        </Box>
        {/* Machine Learning */}
        <Box sx={{ display: "row", mt: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              background: "linear-gradient(90deg, #ffffff, #f87171, #ef4444)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Machine Learning Skills (basics)
            <ArrowDownwardIcon sx={{ ml: 1, color: "#ef4444" }} />
          </Typography>
          <br />
          <Chip
            label="Image Classification"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(239,68,68,0.15)",
              color: "#fca5a5",

              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="OpenCV"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(239,68,68,0.15)",
              color: "#fca5a5",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="DenseNet Models"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(239,68,68,0.15)",
              color: "#fca5a5",
              fontSize: 12,
              ml: 1,
            }}
          />
          <Chip
            label="Deep Learning"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              background: "rgba(239,68,68,0.15)",
              color: "#fca5a5",
              fontSize: 12,
              ml: 1,
            }}
          />
        </Box>
      </Box>
    </>
  );
}

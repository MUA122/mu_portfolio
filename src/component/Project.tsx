import { Box, Chip, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

export function ProSection() {
  return (
    <>
      <Box
        id="projects"
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
          Projects
        </Typography>

        <Typography sx={{ color: "#9ca3af", mb: 5 }}>
          A quick overview of my projects.
        </Typography>
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
              borderColor: "#F56431",
              boxShadow: "0 25px 60px rgba(245, 100, 49, 0.35)",
            },
          }}
          onClick={() => {
            window.open("https://todo.mah-moud.com/", "_blank");
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
              <ApartmentIcon sx={{ color: "#F56431" }} />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                TO-DO List{" "}
              </Typography>
              <Typography sx={{ color: "#9ca3af", fontSize: 14 }}>
                To do list for managing tasks effectively
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "row" }}>
            <Chip
              label="REACT"
              sx={{
                alignSelf: "flex-start",
                mt: 1,
                bgcolor: "rgba(204, 102, 34, 0.26)",
                color: "#f7d9bbff",
                fontSize: 12,
              }}
            />
            <Chip
              label="Material-UI"
              sx={{
                alignSelf: "flex-start",
                mt: 1,
                bgcolor: "rgba(204, 102, 34, 0.26)",
                color: "#f7d9bbff",
                fontSize: 12,
                ml: 1,
              }}
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "#e5e7eb", lineHeight: 1.7 }}
            >
              Created a user-friendly to-do list application with React.js and
              Material UI, implementing 2 new features based on user feedback
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

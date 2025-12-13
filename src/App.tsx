import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { HomeSection } from "./component/Home";
import { Education } from "./component/edu";
import { ExpSection } from "./component/exp";
import { ProSection } from "./component/Project";
import { SkillSection } from "./component/Ski";
import { ContactSection } from "./component/Contact";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function App() {
  const [open, setOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <CssBaseline />

      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: { xs: "14px 16px", sm: "16px 24px", md: "20px 60px" },

          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 999,
          background: "rgba(11, 18, 32, 0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          boxSizing: "border-box",
        }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            p: 0,
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#6366f1" },
          }}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Links - Desktop only */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 5,
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 18,
            "& a": {
              textDecoration: "none",
              color: "#e2e8f0",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { color: "#6366f1" },
            },
          }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </Box>
      </Box>

      {/* Drawer - Mobile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#020617",
            color: "white",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box sx={{ p: 2, fontWeight: "bold", fontSize: 18 }}>Menu</Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

        <List sx={{ py: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                "&:hover": { bgcolor: "rgba(99,102,241,0.12)" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Page Content */}
      <Box
        sx={{
          bgcolor: "#020613",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",

          pt: { xs: "72px", md: "88px" },
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

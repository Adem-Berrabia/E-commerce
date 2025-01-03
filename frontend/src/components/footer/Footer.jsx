import { Box, Button, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        color={theme.palette.mode === "light" ? "#fff" : "#fff"} 
        display={"flex"}
        sx={{ fontSize: 18 }}
        justifyContent={"center"}
      >
        Designed and developed
        <Button
          color="primary"
          variant="text"
          sx={{
            mx: 2,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            padding: 0,
          }}
        >
          Adem Berrabia
        </Button>
        ©2025
      </Typography>
    </Box>
  );
}

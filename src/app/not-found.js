import { Box, Typography, Button, Container } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#18181b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          {/* 404 Number */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", md: "8rem" },
              fontWeight: 700,
              color: "#fafafa",
              mb: 2,
            }}
          >
            404
          </Typography>

          {/* Message */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              color: "#a1a1aa",
              mb: 4,
            }}
          >
            Page Not Found
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "#71717a",
              mb: 6,
              maxWidth: "28rem",
              mx: "auto",
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </Typography>

          {/* Back Home Button */}
          <Button
            href="/"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "#27272a",
              color: "#fafafa",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#3f3f46",
              },
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "#3f3f46",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

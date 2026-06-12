import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
      }}
    >
      {/* Left Side */}
      <Typography variant="h5">
        Dashboard
      </Typography>

      {/* Right Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar>
          A
        </Avatar>

        <Typography>
          Anto
        </Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
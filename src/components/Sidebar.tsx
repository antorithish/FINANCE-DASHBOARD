import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Order Punched Stage",
    icon: <AssignmentTurnedInIcon />,
  },
  {
    title: "Production",
    icon: <PrecisionManufacturingIcon />,
  },
  {
    title: "Packing Stage",
    icon: <Inventory2Icon />,
  },
  {
    title: "Before Installation",
    icon: <FactCheckIcon />,
  },
  {
    title: "After Installation",
    icon: <TaskAltIcon />,
  },
  {
    title: "Reports",
    icon: <AssessmentIcon />,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
  },
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        backgroundColor: "#1E293B",
        color: "white",
        p: 2,
        boxShadow:3
      }}
    >
                    <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 1,
                    }}
                    >
                    NIBAV
                    </Typography>

                    <Typography
                    variant="body2"
                    sx={{
                        color: "#94A3B8",
                        textAlign: "center",
                        mb: 4,
                    }}
                    >
                    Finance
                    </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            sx={{
              borderRadius: 2,
              mb: 1,
              backgroundColor:item.title === "Dashboard" ? "#2563EB" : "transparent",
              fontWeight: item.title == "Dashboard" ? "bold" : "normal",
              borderLeft:item.title === "Dashboard" ? "4px solid #60A5FA": "4px solid transparent",
              "&:hover": {backgroundColor: "#334155",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                minWidth: 40,
                borderLeft:item.title === "Dashboard" ? "4px solid #60A5FA" : "4px solid transparent",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
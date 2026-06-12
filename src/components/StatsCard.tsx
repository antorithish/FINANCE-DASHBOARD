import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface StatsCardProps {
  title: string;
  value: number;
}

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Box
      sx={{
        width: 280,
        backgroundColor: "white",
        borderRadius: 3,
        p: 3,
        height : 140,
        boxShadow: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#6B7280",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#111827",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default StatsCard;
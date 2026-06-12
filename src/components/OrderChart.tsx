import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const orderData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 150 },
  { month: "Mar", orders: 180 },
  { month: "Apr", orders: 220 },
  { month: "May", orders: 190 },
  { month: "Jun", orders: 260 },
];

function OrdersChart() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        p: 3,
        height: 450,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 3,
        }}
      >
        Orders
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={orderData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="orders"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default OrdersChart;
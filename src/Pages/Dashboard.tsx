import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import OrdersChart from "../components/OrderChart";
import ProductivityTable from "../components/ProductivityTable";
import OrdersDataGrid from "../components/OrderDataGrid";
const stats = [
  {
    title: "Total Orders",
    value: 483,
  },
  {
    title: "Waiting For Approval",
    value: 322,
  },
  {
    title: "Verified Documents",
    value: 101,
  },
  {
    title: "Rejected Documents",
    value: 2,
  },
];

function Dashboard() {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Main Area */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            p: 3,
          }}
        >
          {/* Cards go here */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {stats.map((item) => (
              <StatsCard
                key={item.title}
                title={item.title}
                value={item.value}
              />
            ))}
          </Box>

          <Box
  sx={{
    display: "flex",
    gap: 2,
    mt: 3,
  }}
>
  <Box
    sx={{
      flex: 7,
    }}
  >
    <OrdersChart />
  </Box>

  <Box
    sx={{
      flex: 3,
    }}
  >
    <ProductivityTable />
  </Box>
</Box>
      <OrdersDataGrid/>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
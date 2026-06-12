import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";

const orders = [
  {
    orderId: "NL-010752",
    customerName: "Prasana",
    assignee: "-",
    model: "Series V",
    floor: "G+1",
    delivery: "Standard",
    stage: "Approved",
    labels: ["GST Included", "Installation Included"],
  },
  {
    orderId: "NL-010751",
    customerName: "Karthik",
    assignee: "Arun",
    model: "Series IV",
    floor: "G+2",
    delivery: "Rapid",
    stage: "Pending",
    labels: ["GST Included"],
  },
  {
    orderId: "NL-010750",
    customerName: "Rahul",
    assignee: "-",
    model: "Series V Max",
    floor: "G+3",
    delivery: "Fast",
    stage: "Approved",
    labels: ["Installation Included"],
  },
  {
    orderId: "NL-010749",
    customerName: "Akash",
    assignee: "Kumar",
    model: "Series IV Max",
    floor: "G+1",
    delivery: "Standard",
    stage: "Pending",
    labels: ["GST Included"],
  },
  {
    orderId: "NL-010748",
    customerName: "Surya",
    assignee: "-",
    model: "Series V",
    floor: "G+2",
    delivery: "Rapid",
    stage: "Approved",
    labels: ["GST Included", "Special Price"],
  },
  {
    orderId: "NL-010747",
    customerName: "Vijay",
    assignee: "Ramesh",
    model: "Series IV",
    floor: "G+1",
    delivery: "Fast",
    stage: "Pending",
    labels: ["Installation Included"],
  },
  {
    orderId: "NL-010746",
    customerName: "Dinesh",
    assignee: "-",
    model: "Series V Max",
    floor: "G+4",
    delivery: "Standard",
    stage: "Approved",
    labels: ["GST Included"],
  },
  {
    orderId: "NL-010745",
    customerName: "Ajith",
    assignee: "Prabhu",
    model: "Series IV Max",
    floor: "G+2",
    delivery: "Rapid",
    stage: "Pending",
    labels: ["Installation Included"],
  },
  {
    orderId: "NL-010744",
    customerName: "Manoj",
    assignee: "-",
    model: "Series V",
    floor: "G+1",
    delivery: "Fast",
    stage: "Approved",
    labels: ["GST Included"],
  },
  {
    orderId: "NL-010743",
    customerName: "Arjun",
    assignee: "Siva",
    model: "Series IV",
    floor: "G+3",
    delivery: "Standard",
    stage: "Pending",
    labels: ["GST Included", "Installation Included"],
  },
];

function OrdersSection() {
  const getDeliveryColor = (delivery: string) => {
    switch (delivery) {
      case "Standard":
        return "#2563EB";
      case "Rapid":
        return "#DC2626";
      case "Fast":
        return "#D97706";
      default:
        return "#6B7280";
    }
  };

  return (
    <Box sx={{backgroundColor: "white",borderRadius: 5,mt: 3,overflow: "hidden",}}>
      {orders.map((order) => (
        <Box key={order.orderId} sx={{display: "flex",alignItems: "center",px: 2,py: 2,borderBottom: "1px solid #E5E7EB",}}>
          <Box sx={{ width: 60 }}><IconButton size="small"><AddCircleOutlineIcon color="primary" /></IconButton></Box>
          <Box sx={{width: 220,display: "flex",flexWrap: "wrap",gap: 1,}}>
            {order.labels.map((label) => (<Chip key={label}label={label}size="small"color="warning"variant="outlined"/>))}
          </Box>
          <Typography sx={{ width: 140 }}>{order.orderId}
          </Typography>

          <Typography sx={{ width: 180 }}>{order.customerName}
          </Typography>

          <Typography sx={{ width: 120 }}>{order.assignee}
          </Typography>

          <Typography sx={{ width: 140 }}>{order.model}
          </Typography>

          <Typography sx={{ width: 100 }}>{order.floor}
          </Typography>

          <Box sx={{ width: 140 }}><Chip label={order.delivery}variant="outlined"
               sx={{
                color: getDeliveryColor(order.delivery),
                borderColor: getDeliveryColor(order.delivery)}}/>
          </Box>

          <Box sx={{ width: 140 }}><Chip label={order.stage}color={order.stage === "Approved"? "success": "warning"}/>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default OrdersSection;
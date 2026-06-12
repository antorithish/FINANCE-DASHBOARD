import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const teamMembers = [
  {
    name: "Krish",
    pending: 0,
    approved: 0,
  },
  {
    name: "Kishor",
    pending: 0,
    approved: 0,
  },
  {
    name: "Balara",
    pending: 0,
    approved: 35,
  },
  {
    name: "Baskar",
    pending: 0,
    approved: 57,
  },
  {
    name: "Akbar",
    pending: 0,
    approved: 66,
  },
];

function ProductivityTable() {
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
        Finance Productivity
      </Typography>

      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          fontWeight: "bold",
        }}
      >
        <Typography>Name</Typography>
        <Typography>Pending</Typography>
        <Typography>Approved</Typography>
      </Box>

      {/* Data Rows */}
      {teamMembers.map((member) => (
        <Box
          key={member.name}
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            py: 1.5,
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Typography>{member.name}</Typography>

          <Typography>
            {member.pending}
          </Typography>

          <Typography>
            {member.approved}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ProductivityTable;


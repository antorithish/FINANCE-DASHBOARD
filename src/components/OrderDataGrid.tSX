import { useState } from "react";
import { Box, Chip, TextField, MenuItem, Select, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import {
  DataGrid,
  Toolbar,
  ExportCsv,
} from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    labels: ["GST Included", "Installation Included"],
    orderId: "NL-010752",
    customerName: "Prasana",
    assignee: "-",
    model: "Series V",
    floor: "G+1",
    delivery: "Standard",
    stage: "Approved",
  },
  {
    id: 2,
    labels: ["GST Included", "Installation Included"],
    orderId: "NL-010751",
    customerName: "Prasana",
    assignee: "-",
    model: "Series IV",
    floor: "G+2",
    delivery: "Rapid",
    stage: "Pending",
  },
  {
    id: 3,
    labels: ["GST Included"],
    orderId: "NL-010750",
    customerName: "Dummy",
    assignee: "Kumar",
    model: "Series V Max",
    floor: "G+3",
    delivery: "Fast",
    stage: "Rejected",
  },
  {
    id: 4,
    labels: ["GST Included", "Special Price"],
    orderId: "NL-010749",
    customerName: "Arun Test",
    assignee: "Rangesh",
    model: "Series IV Max",
    floor: "G+1",
    delivery: "Standard",
    stage: "Approved",
  },
  {
    id: 5,
    labels: ["Installation Included"],
    orderId: "NL-010748",
    customerName: "Balaji",
    assignee: "Arun",
    model: "Series III",
    floor: "G+2",
    delivery: "Rapid",
    stage: "Pending",
  },
];
const labelOptions = ["GST Included", "Installation Included", "Special Price"];
const modelOptions = ["Series V", "Series IV", "Series V Max", "Series IV Max", "Series III"];
const floorOptions = ["G+1", "G+2", "G+3"];
const deliveryOptions = ["Standard", "Rapid", "Fast"];
const stageOptions = ["Approved", "Pending", "Rejected"];

function CustomToolbar() {
  return (
    <Toolbar>
      <ExportCsv />
    </Toolbar>
  );
}

export default function OrdersDataGrid() {
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [customerFilter, setCustomerFilter] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [labelsFilter, setLabelsFilter] = useState([]);
  const [modelFilter, setModelFilter] = useState("");
  const [floorFilter, setFloorFilter] = useState("");
  const [deliveryFilter, setDeliveryFilter] = useState("");
  const [stageFilter, setStageFilter] = useState("");
  const filteredRows = rows.filter((row) => {
    const matchesOrderId = row.orderId.toLowerCase().includes(orderIdFilter.toLowerCase());
    const matchesCustomer = row.customerName.toLowerCase().includes(customerFilter.toLowerCase());
    const matchesAssignee = row.assignee.toLowerCase().includes(assigneeFilter.toLowerCase());
    const matchesModel = modelFilter === "" || row.model === modelFilter;
    const matchesFloor = floorFilter === "" || row.floor === floorFilter;
    const matchesDelivery = deliveryFilter === "" || row.delivery === deliveryFilter;
    const matchesStage = stageFilter === "" || row.stage === stageFilter;
    const matchesLabels =labelsFilter.length === 0 ||labelsFilter.some((selectedLabel) => row.labels.includes(selectedLabel));
    return (matchesOrderId &&matchesCustomer &&matchesAssignee &&matchesModel &&matchesFloor &&matchesDelivery &&matchesStage &&matchesLabels);
  });

  const renderHeaderWithFilter = (title, filterElement) => (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", py: 1 }}>
      <Box sx={{ fontWeight: 600, mb: 1 }}>{title}</Box>
      {filterElement}
    </Box>
  );

  const columns = [
    {
      field: "labels",
      headerName: "Custom Label",
      width: 260,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Custom Label",
          <Select
            multiple
            size="small"
            displayEmpty
            value={labelsFilter}
            onChange={(e) => setLabelsFilter(e.target.value)}
            fullWidth
            renderValue={(selected) =>
              selected.length === 0 ? (<Box sx={{ color: "text.disabled" }}>Select Labels</Box>) : (`${selected.length} selected`)
            }
          >
            {labelOptions.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        ),
      renderCell: (params:any) => (
        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
          {params.row.labels.map((label) => (
            <Chip key={label} label={label} size="small" />
          ))}
        </Box>
      ),
    },

    {
      field: "orderId",
      headerName: "Order ID",
      width: 150,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Order ID",
          <TextField
            size="small"
            placeholder="Search"
            value={orderIdFilter}
            onChange={(e) => setOrderIdFilter(e.target.value)}
            fullWidth
          />
        ),
    },

    {
      field: "customerName",
      headerName: "Customer Name",
      width: 180,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Customer Name",
          <TextField
            size="small"
            placeholder="Search"
            value={customerFilter}
            onChange={(e) => setCustomerFilter(e.target.value)}
            fullWidth
          />
        ),
    },

    {
      field: "assignee",
      headerName: "Assignee",
      width: 160,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Assignee",
          <TextField
            size="small"
            placeholder="Search"
            value={assigneeFilter}
            onChange={(e) => setAssigneeFilter(e.target.value)}
            fullWidth
          />
        ),
    },

    {
      field: "model",
      headerName: "Models",
      width: 170,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Models",
          <Select
            size="small"
            displayEmpty
            value={modelFilter}
            onChange={(e) => setModelFilter(e.target.value)}
            fullWidth
            renderValue={(selected) =>
              selected === "" ? (<Box sx={{ color: "text.disabled" }}>Models</Box>) : (selected)
            }
          >
            <MenuItem value="">All</MenuItem>
            {modelOptions.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </Select>
        ),
    },

    {
      field: "floor",
      headerName: "Floors",
      width: 130,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Floors",
          <Select
            size="small"
            displayEmpty
            value={floorFilter}
            onChange={(e) => setFloorFilter(e.target.value)}
            fullWidth
            renderValue={(selected) =>
              selected === "" ? (
                <Box sx={{ color: "text.disabled" }}>Floors</Box>
              ) : (
                selected
              )
            }
          >
            <MenuItem value="">All</MenuItem>
            {floorOptions.map((floor) => (
              <MenuItem key={floor} value={floor}>
                {floor}
              </MenuItem>
            ))}
          </Select>
        ),
    },

    {
      field: "delivery",
      headerName: "Delivery",
      width: 160,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Delivery",
          <Select
            size="small"
            displayEmpty
            value={deliveryFilter}
            onChange={(e) => setDeliveryFilter(e.target.value)}
            fullWidth
            renderValue={(selected) =>
              selected === "" ? (
                <Box sx={{ color: "text.disabled" }}>Delivery</Box>
              ) : (
                selected
              )
            }
          >
            <MenuItem value="">All</MenuItem>
            {deliveryOptions.map((delivery) => (
              <MenuItem key={delivery} value={delivery}>
                {delivery}
              </MenuItem>
            ))}
          </Select>
        ),
      renderCell: (params:any) => (
        <Chip label={params.row.delivery} size="small" color="primary" />
      ),
    },

    {
      field: "stage",
      headerName: "Stages",
      width: 160,
      sortable: false,
      renderHeader: () =>
        renderHeaderWithFilter(
          "Stages",
          <Select
            size="small"
            displayEmpty
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            fullWidth
            renderValue={(selected) =>
              selected === "" ? (
                <Box sx={{ color: "text.disabled" }}>Stage</Box>
              ) : (
                selected
              )
            }
          >
            <MenuItem value="">All</MenuItem>
            {stageOptions.map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage}
              </MenuItem>
            ))}
          </Select>
        ),
      renderCell: (params:any) => (
        <Chip
          label={params.row.stage}
          size="small"
          color={
            params.row.stage === "Approved"
              ? "success"
              : params.row.stage === "Pending"
              ? "warning"
              : "error"
          }
        />
      ),
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button startIcon={<ViewColumnIcon />} variant="outlined">
          Manage Columns
        </Button>

        <Button startIcon={<RefreshIcon />} variant="outlined">
          Refresh
        </Button>
      </Box>

      <Box sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          slots={{toolbar: CustomToolbar}}
          columnHeaderHeight={100}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#EEF2FF",
              fontWeight: 600,
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              alignItems: "flex-start",
            },
          }}
        />
      </Box>
    </Box>
  );
}
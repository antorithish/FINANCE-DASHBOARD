import { useState } from "react";
import { Box, Chip, TextField, MenuItem, Select, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { DataGrid } from "@mui/x-data-grid";

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
    const matchesLabels =labelsFilter.length === 0 ||labelsgFilter.some((selectedLabel) => row.labels.includes(selectedLabel));
    return (matchesOrderId &&matchesCustomer &&matchesAssignee &&matchesModel &&matchesFloor &&matchesDelivery &&matchesStage &&matchesLabels);
  });
  const renderHeaderWithFilter =  
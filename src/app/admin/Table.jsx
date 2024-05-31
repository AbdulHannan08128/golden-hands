import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from "react-responsive";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {STATUS} from '../../../utils/API';

const columnsBase = [
  { field: "APP_ID", headerName: "APP_ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "number", headerName: "Phone", flex: 1 },
  { field: "email", headerName: "Email", flex: 2 },
  { field: "STATUS", headerName: "Status", flex: 1 },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    valueGetter: (params) => {
      const date = new Date(params.value);
      return new Intl.DateTimeFormat("en-GB").format(date);
    },
  },
];

const columnsWithMinWidth = [
  { field: "APP_ID", headerName: "APP_ID", flex: 1, minWidth: 200 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 200 },
  { field: "number", headerName: "Phone", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 2, minWidth: 270 },
  { field: "STATUS", headerName: "Status", flex: 1, minWidth: 170 },
  {
    field: "date",
    headerName: "Date",
    flex: 1, minWidth: 120,
    valueGetter: (params) => {
      const date = new Date(params.value);
      return new Intl.DateTimeFormat("en-GB").format(date);
    },
  },
];

export default function DataTable({ DATA }) {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const columns = isMobile ? columnsWithMinWidth : columnsBase;
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [statusMap, setStatusMap] = React.useState({});
  const [ data, setData] = React.useState(DATA);

  const rows = data ? data.map((row) => ({ ...row, id: row._id })) : [];
  rows.reverse();

  const handleRowSelection = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedData = rows.filter((row) => selectedIDs.has(row.id));
    setSelectedRows(selectedData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusChange = (event, rowId) => {
    setStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [rowId]: event.target.value,
    }));
  };

  const getStatus = (rowId) => {
    return statusMap[rowId] || selectedRows.find((row) => row.id === rowId)?.STATUS || "";
  };

  const handleSave = async () => {
    const updatedRows = selectedRows.map((row) => ({
      ...row,
      STATUS: getStatus(row.id),
    }));
    console.log(updatedRows); // This will give you the new data

    await STATUS(updatedRows);
    
    const updatedData = data.map((row) => {
      const updatedStatus = statusMap[row._id] !== undefined ? statusMap[row._id] : row.STATUS;
      return { ...row, STATUS: updatedStatus };
    });
  
    setData(updatedData);
  
    setOpen(false);
  };

  React.useEffect(() => {
    const initialStatusMap = {};
    selectedRows.forEach(row => {
      initialStatusMap[row.id] = row.STATUS;
    });
    setStatusMap(initialStatusMap);
  }, [selectedRows]);

  return (
    <Box my={10} overflow="hidden">
      <Paper elevation={3} sx={{ p: 2, mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h4" component="div" fontWeight="bold">
          New Appointments
        </Typography>
      </Paper>
      <Box sx={{ overflowX: 'auto' }}>
        <Box sx={{ minWidth: 700, bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            autoHeight
            checkboxSelection
            onRowSelectionModelChange={(newSelection) =>
              handleRowSelection(newSelection)
            }
          />
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>STATUS PANEL</DialogTitle>
        <DialogContent dividers>
          {selectedRows.map((row) => (
            <Box key={row.id} mb={4}>
              <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> {row.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Status:</strong> {getStatus(row.id)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Date:</strong> {new Intl.DateTimeFormat("en-GB").format(new Date(row.date))}
              </Typography>
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel id={`status-select-label-${row.id}`}>Status</InputLabel>
                <Select
                  labelId={`status-select-label-${row.id}`}
                  id={`status-select-${row.id}`}
                  value={getStatus(row.id)}
                  label="Status"
                  onChange={(event) => handleStatusChange(event, row.id)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="PENDING">PENDING</MenuItem>
                  <MenuItem value="ACCEPTED">ACCEPTED</MenuItem>
                  <MenuItem value="DISMISSED">DISMISSED</MenuItem>
                  <MenuItem value="RESCHEDULED">RESCHEDULED</MenuItem>
                </Select>
                <FormHelperText>Select the status for the appointment</FormHelperText>
              </FormControl>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ position: 'relative', mt: 2 }}>
        <Box sx={{ position: 'absolute', inset: -5 }}>
          <Box sx={{ mx: 'auto', h: 'full', w: 'full', maxW: 'sm', bgcolor: 'rgba(255, 255, 255, 0.3)', blur: 10, borderRadius: 'xl' }}></Box>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ fontWeight: 'bold', py: 2, px: 4 }}
          onClick={() => selectedRows.length > 0 && setOpen(true)}
        >
          Action
        </Button>
      </Box>
    </Box>
  );
}

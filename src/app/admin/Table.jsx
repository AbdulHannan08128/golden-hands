import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from 'react-responsive';

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
      return new Intl.DateTimeFormat('en-GB').format(date);
    }
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
    flex: 1,
    minWidth: 120,
    valueGetter: (params) => {
      const date = new Date(params.value);
      return new Intl.DateTimeFormat('en-GB').format(date);
    }
  },
];

export default function DataTable({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // Select columns based on screen size
  const columns = isMobile ? columnsWithMinWidth : columnsBase;

  // Add an id field to each row for the DataGrid
  const rows = data ? data.map((row) => ({ ...row, id: row._id })) : [];

  return (
    <div className="w-full overflow-x-auto my-10">
      <div className="min-w-[700px] sm:min-w-0 dark:bg-slate-200 rounded-2xl">
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
          className=""
        />
      </div>
    </div>
  );
}

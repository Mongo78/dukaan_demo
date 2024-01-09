import * as React from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import "./TableComp.scss";

import {
  RupeeIcon,
  SearchIcon,
  DownUpArrowIcon,
  DownloadIcon,
} from "../../../Assets/Icons/Icons";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "#4159", "7 July ,2023", 2412, 22),
  createData("Ice cream sandwich", "#2237", "7 July ,2023", 3237, 22),
  createData("Eclair", "#2262", "7 July ,2023", 2214, 22),
  createData("Cupcake", "#2305", "8 July ,2023", 6217, 22),
  createData("Gingerbread", "#2356", "8 July ,2023", 4239, 22),
  createData("Frozen yoghurt", "#2159", "8 July ,2023", 2234, 22),
  createData("Ice cream sandwich", "#2237", "8 July ,2023", 2317, 22),
  createData("Eclair", "#2262", "9 July ,2023", 2124, 6.0),
  createData("Cupcake", "#2305", "9 July ,2023", 6217, 22),
  createData("Gingerbread", "#2356", "9 July ,2023", 4219, 22),
];

export default function DenseTable() {
  return (
    <TableContainer className='dense_table_main_container' component={Paper}>
      <div className='top_input_div'>
        <div className='input_div'>
          <div className='icon'> {SearchIcon}</div>

          <input
            type='text'
            className='search__input'
            placeholder='Search by ID...'
          />
        </div>
        <div className='button_div'>
          <Button variant='contained' endIcon={DownUpArrowIcon}>
            Sort
          </Button>
          <Button variant='contained'>{DownloadIcon}</Button>
        </div>
      </div>

      <Table
        className='table'
        sx={{ minWidth: 650 }}
        size='small'
        aria-label='a dense table'
      >
        <TableHead className='table_head'>
          <TableRow>
            <TableCell className='align_left' align='left'>
              Order ID
            </TableCell>
            <TableCell className='align_center' align='center'>
              Order Date
            </TableCell>
            <TableCell className='align_center' align='center'>
              Order Amount
            </TableCell>
            <TableCell className='align_right' align='right'>
              Transaction Fees
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table_body'>
          {rows.map((row) => (
            <TableRow
              className='table_row'
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className='table_cell left' align='right'>
                {row.calories}
              </TableCell>
              <TableCell className='table_cell center' align='right'>
                {row.fat}
              </TableCell>
              <TableCell className='table_cell center' align='right'>
                {RupeeIcon} {row.carbs}
              </TableCell>
              <TableCell className='table_cell right' align='right'>
                {RupeeIcon}
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='pagination_div'>
        <Pagination
          count={10}
          variant='outlined'
          color='primary'
          shape='rounded'
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: "Hell", next: "Ke" }}
              {...item}
            />
          )}
        />
      </div>
    </TableContainer>
  );
}

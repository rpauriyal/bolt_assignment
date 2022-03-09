import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Title } from "./style";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <>
      <Title>Recent Trips</Title>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {props.tableHeader.map((value, indx) => (
                <TableCell key={indx}>{value.title} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableList.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {moment.unix(row.strt_time).format("MMMM Do YYYY, h:mm:ss a")}
                </TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.mx_speed}</TableCell>
                <TableCell>{row.avg_speed}</TableCell>
                <TableCell>{row.strt_voltage}</TableCell>
                <TableCell>{row.end_voltage}</TableCell>
                <TableCell>{row.distance}</TableCell>
                <TableCell>{row.driver_score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

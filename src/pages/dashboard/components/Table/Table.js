import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip,
  Radio,
  Select,
  MenuItem
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  const [selectedValue,setSelectedValue] = React.useState(1);

  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value));
  };

  const handleItemChange = (event,a) => {
    setSelectedValue(event.target.value);
  }

  return (
    <Table className="mb-0"
    checkboxSelection>
      <TableHead>
        <TableRow>
          <TableCell>Exercise</TableCell>
          <TableCell>Selected Reps</TableCell>
          <TableCell>Rep Length</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, type, time, day, reps, restLength, repeat, patientID }) => (
          <TableRow key={id}>
            <TableCell><Radio
                        checked={selectedValue === id}
                        onChange={handleChange}
                        onClick={handleChange}
                        value={id}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': id }}
                        /></TableCell>
            <TableCell className="pl-3 fw-normal">{type}</TableCell>
            <TableCell><Select
          value={reps}
          label="Reps"
          fullWidth
          key={id}
          onChange={handleItemChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select></TableCell>
            <TableCell>{restLength}</TableCell>
            <TableCell>{time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

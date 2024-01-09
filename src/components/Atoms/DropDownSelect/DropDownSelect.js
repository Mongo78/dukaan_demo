import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DropDownSelect.scss";
export default function SelectSmall() {
  const [age, setAge] = React.useState("Last Month");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      className='form_control'
      sx={{ m: 1, minWidth: 120 }}
      size='small'
    >
      <Select
        className='select'
        defaultValue='This Month'
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={"This Month"}>This Month</MenuItem>
        <MenuItem value={"Last Month"}>Last Month</MenuItem>
      </Select>
    </FormControl>
  );
}

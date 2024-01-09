import React from "react";
import "./Other.scss";
import { Paper, Button } from "@mui/material";
import { WarningIcon } from "../../../Assets/Icons/Icons";
import { Link } from "react-router-dom";
function Other() {
  return (
    <div className='other'>
      <Paper elevation={1} className='other_container'>
        {WarningIcon}
        <h2>Under production please go to dashboard or payments !</h2>
        <div className='buttons'>
          <Button variant='contained'>
            <Link to='/'>Dashboard</Link>
          </Button>
          <Button variant='contained'>
            <Link to='/payments'>Payments</Link>
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Other;

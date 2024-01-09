import React from "react";
import Paper from "@mui/material/Paper";
import {
  SearchIcon,
  QuestionIcon,
  MessageIcon,
  DownSolidArrowIcon,
  RupeeIcon,
} from "../../../Assets/Icons/Icons";
import "./Dashboard.scss";
import Notify from "../../Atoms/Notification/Notify";
import SelectSmall from "../../Atoms/DropDownSelect/DropDownSelect";
import DenseTable from "../../Element/Table/TableComp";
function Dashboard() {
  return (
    <div className='dashboard_container'>
      <div className='top_container'>
        <div className='content_div'>
          <h2>Payments</h2>
          <p>{QuestionIcon} how it works</p>
        </div>
        <div className='input_div'>
          {SearchIcon}
          <input
            type='text'
            className='search__input'
            placeholder='Search features ,tutorial etc.'
          />
        </div>
        <div className='notification_container'>
          <Notify icon={MessageIcon} />
          <Notify icon={DownSolidArrowIcon} />
        </div>
      </div>
      <div className='bottom_container'>
        <div className='overview'>
          <h2>Overview</h2>
          <SelectSmall />
        </div>
        <div className='amount_div'>
          <Paper elevation={2} className='main_order_div'>
            <p>Online Order</p>
            <h2>2234</h2>
          </Paper>
          <Paper elevation={2} className='main_order_div'>
            <p>Amount recieved</p>
            <h2>{RupeeIcon}234,566,897</h2>
          </Paper>
        </div>
        <div className='transactions'>
          <h2>Transactions</h2>
          <h2 className='devider'>|</h2>
          <h2>This Month</h2>
        </div>
        <div className='table_div'>
          <DenseTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import "./Notify.scss";
import { SearchIcon } from "../../../Assets/Icons/Icons";
function Notify({ icon = SearchIcon }) {
  return <div className='notify_container'>{icon}</div>;
}

export default Notify;

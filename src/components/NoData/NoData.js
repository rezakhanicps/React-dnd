import React from "react";
import { FaUserAltSlash } from "react-icons/fa";

const NoData = ({ className }) => (
  <div className={className}>
    <FaUserAltSlash /> <br />
    No Employees
  </div>
);

export default NoData;

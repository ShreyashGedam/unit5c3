import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../context/data";

export const EmployeeList = () => {

  const {user} = useContext(DataContext)
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
        {user.map( (x) => (
          <div>
          < img className="employee_image" src = {x.image} />
          <span className="employee_name">{x.employee_name}</span>
          <span className="employee_title">{x.title}</span>
          </div>
        ))}
        <img className="employee_image" />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div>
    </div>
  );
};

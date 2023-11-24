import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkCustom = ({ label, to }) => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(to)}>{label}</div>;
};

export default LinkCustom;

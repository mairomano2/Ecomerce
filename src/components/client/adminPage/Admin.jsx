import { useContext, useEffect } from "react";
import { db } from "../../db/firebase";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../../../context/loggedContext";
import { NavbarClient } from "../NavbarClient";

export const Admin = () => {
  const { logged } = useContext(LoggedContext);
  console.log("context", logged) //undefined
  const navigate = useNavigate()
 
  return(
    <div>
      <NavbarClient />
      {logged ? <Admin /> : navigate("/client/login")}
    </div>
  )
};
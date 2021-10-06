import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Middlewares: React.FC = (props) => {
  const history = useHistory();
  const [token, settoken] =useState<string | null>(window.sessionStorage.getItem("x-token"))

  // useEffect(() => {
  //   // settoken(window.sessionStorage.getItem("x-token"));
  //   if (!token) {
  //     // window.location.pathname = "/login";
  //   }
  //   return () => {
  //     settoken(null);
  //   };
  // }, [token]);
  return <>{props.children}</>;
};

export default Middlewares;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosInit } from "../../utils/network";
import { Button } from "react-bootstrap";

export default function LBManager(props) {
  const navigate = useNavigate();

  const gtdAxios = AxiosInit();
  const [data, setData] = useState([]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    gtdAxios.get("/").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data.map((og) => {
        return og.og;
      })}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosInit } from "../../utils/network";
import { Button, Spinner } from "react-bootstrap";

export default function LBManager(props) {
  const navigate = useNavigate();

  const gtdAxios = AxiosInit();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    setLoading(true);
    gtdAxios.get("/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? <Spinner animation="border" /> : <></>}
      {data.map((og) => {
        return og.og;
      })}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosInit } from "../../utils/network";
import { Button, Spinner } from "react-bootstrap";
import "./style.css";

export default function LBManager(props) {
  const navigate = useNavigate();

  const gtdAxios = AxiosInit();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useState(false);

  const og1 = useRef();
  const og2 = useRef();
  const og3 = useRef();
  const og4 = useRef();
  const og5 = useRef();
  const og6 = useRef();
  const og7 = useRef();
  const og8 = useRef();

  let inputs = {
    "6283417d392ea52b699e06df": og1,
    "6283417d392ea52b699e06e0": og2,
    "6283417d392ea52b699e06e1": og3,
    "6283417d392ea52b699e06e2": og4,
    "6283417d392ea52b699e06e3": og5,
    "6283417d392ea52b699e06e4": og6,
    "6283417d392ea52b699e06e5": og7,
    "6283417d392ea52b699e06e6": og8,
  };

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleConfirm() {
    setEditable(false);
  }

  useEffect(() => {
    setLoading(true);
    gtdAxios.get("/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="leaderboard_manager_container">
      <div className="leaderboard_manager_button">
        {editable ? (
          <>
            <Button onClick={handleConfirm} variant="outline-info">
              Confirm
            </Button>
            <div style={{ width: "1%" }} />
            <Button onClick={() => setEditable(false)} variant="outline-danger">
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={() => setEditable(true)} variant="outline-light">
            Edit
          </Button>
        )}
        <div style={{ width: "1%" }} />
        <Button onClick={handleLogout} variant="outline-secondary">
          Logout
        </Button>
      </div>
      <div className="leaderboard_manager_parent">
        {loading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <table className="leaderboard_manager_child">
            <tr>
              <th className="no">NO</th>
              <th className="team">TEAM</th>
              <th>HOUSE</th>
              <th>POINTS</th>
            </tr>
            {data.map((value, index) => (
              <tr>
                <td className="leaderboard_manager_no">{index + 1}</td>
                <td className="leaderboard_manager_og">{value.og}</td>
                <td className="leaderboard_manager_house">{value.house}</td>
                <td className="leaderboard_manager_points">
                  {editable ? (
                    <input
                      className="leaderboard_manager_points_input"
                      defaultValue={value.points}
                      type="number"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      ref={inputs[value._id]}
                    />
                  ) : (
                    value.points
                  )}
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}

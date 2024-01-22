"use client";
import React, { useState } from "react";
import { servers } from "../app/dashboard/servers";
import Record from "../components/record";
import ServerDetails from "../components/serverDetails";

export default function Server() {
  let [details, setDetails] = useState(false);
  const [index, setIndex] = useState(-1);
  function showDetails(serverNumber) {
    setIndex(serverNumber);
    if (details === false) return setDetails((details = true));
    if (index !== serverNumber) return setDetails((details = true));
    return setDetails((details = false));
  }

  return (
    <div>
      {servers.map((server, index) => {
        return (
          <div>
            <div
              className="server p-6 my-2 mx-40 font-bold bg-white border shadow"
              key={index}
            >
              {server.name}{" "}
              <span
                style={{ color: server.status === "Online" ? "green" : "red" }}
              >{` [ ${server.status} ] `}</span>
              <div className="server-day flex flex-row justify-evenly items-center mt-4">
                {server.history.map((day, index) => {
                  if (day.status == "Offline") {
                    return <Record data="bg-red-500" key={index}></Record>;
                  }
                  return <Record data="bg-green-600" key={index}></Record>;
                })}
              </div>
              <span
                className="block mt-4 text-indigo-500 cursor-pointer"
                onClick={() => {
                  showDetails(index);
                }}
              >
                Show Details
              </span>
            </div>
            <div></div>
          </div>
        );
      })}
      {details && <ServerDetails data={index}></ServerDetails>}
    </div>
  );
}

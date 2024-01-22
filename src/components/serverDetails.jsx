import React from "react";
import { servers } from "../app/dashboard/servers";

export default function ServerDetails(props) {
  return (
    <div className="serverDetails p-6 my-2 mx-40 border shadow bg-indigo-100">
      <h1 className="font-bold mb-2 text-lg">Server Details</h1>
      <table className="border border-slate-500 border-collapse w-full text-center">
        <thead>
          <th>Name</th>
          <th>IP Address</th>
          <th>Status</th>
          <th>Response Time</th>
          <th>Up Time</th>
        </thead>

        <tbody>
          <tr>
            <td>{servers[props.data].name}</td>
            <td>{servers[props.data].ipAddress}</td>
            <td>{servers[props.data].status}</td>
            <td>{servers[props.data].responseTime}</td>
            <td>{servers[props.data].uptime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

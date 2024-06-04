import React from "react";

export default function Table({ prod }) {
  return (
    <div className="overflow-x-auto grid">
      <table className="table table-xs text-sm   ">
        <thead className=" ">
          <tr className=" ">
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Company</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th>friends</th>
          </tr>
        </thead>
        <tbody>
          <tr className="  ">
            <td>{prod.name}</td>
            <td>{prod.age}</td>
            <td>{prod.gender}</td>
            <td>{prod.company}</td>
            <td>{prod.email}</td>
            <td>{prod.phone}</td>
            <td>{prod.address}</td>
            <td>
              {prod.friends.map((data) => {
                return <div key={data.id}>{<h1>{data.name}</h1>}</div>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

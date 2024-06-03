import React, { useEffect, useState } from "react";
//import { getfunc } from "../../service/Apis";

export default function Filter() {
  const [gender, setgender] = useState("All");
  const [status, setstatus] = useState("All");

  useEffect(() => {}, [gender, status]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-10 ">
      <div>
        <button className="bg-blue-500 m-auto text-center text-white rounded-md p-1 text-xl font-bold h-10">
          Export to Csv
        </button>
      </div>
      <div className="font-bold">
        <h1 className="text-xl">filter by gender</h1>

        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              name="gender"
              value={"All"}
              onChange={(e) => setgender(e.target.value)}
              defaultChecked
            />
            <label htmlFor="">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Male"}
              onChange={(e) => setgender(e.target.value)}
            />
            <label htmlFor="">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={(e) => setgender(e.target.value)}
            />
            <label htmlFor="">Female</label>
          </div>
        </div>
      </div>
      <div className="font-bold">
        <h1 className="text-xl">Short by value</h1>
      </div>
      <div className=" font-bold">
        <h1 className="text-xl">filter by Status</h1>

        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              name="status"
              value={"All"}
              onChange={(e) => setstatus(e.target.value)}
              defaultChecked
            />
            <label htmlFor="">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              value={"Active"}
              onChange={(e) => setstatus(e.target.value)}
            />
            <label htmlFor="">Active</label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              value={"Inactive"}
              onChange={(e) => setstatus(e.target.value)}
            />
            <label htmlFor="">Inactive</label>
          </div>
        </div>
      </div>
    </div>
  );
}

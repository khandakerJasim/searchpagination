import React, { useEffect, useState } from "react";
//import { getfunc } from "../../service/Apis";

export default function Filter() {
  const [gender, setgender] = useState("All");

  useEffect(() => {}, [gender]);

  return (
    <div className="">
      <div className="font-bold">
        <h1 className="text-xl text-center ">filter by gender</h1>

        <div className="flex gap-4 pt-3 items-center text-center justify-center ">
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
    </div>
  );
}

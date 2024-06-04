import React, { useEffect, useState } from "react";
import { DataState } from "../../../component/context/Contextprovider";
//import { getfunc } from "../../service/Apis";

export default function Filter() {
  const [gender, setgender] = useState("All");

  useEffect(() => {}, [gender]);
  const {
    productdispatch,
    productstate: { bygender },
  } = DataState();

  return (
    <div className="">
      <div className="font-bold">
        <h1 className="text-xl text-center ">filter by gender</h1>

        {/* <div className="flex gap-4 pt-3 items-center text-center justify-center ">
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
        </div> */}

        <ul className="list-none  text-center">
          <button
            className=" hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 focus:outline-none focus:border-b border-red-400"
            onClick={() =>
              productdispatch({
                type: "filter_by_gender",
                payload: "male",
              })
            }
            checked={bygender}
          >
            Men
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productdispatch({
                type: "filter_by_gender",
                payload: "female",
              })
            }
            checked={bygender}
          >
            Women
          </button>
        </ul>
      </div>
    </div>
  );
}

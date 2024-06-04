import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { DataState } from "../../../component/context/Contextprovider";

export default function Search() {
  const [search, setsearch] = useState("");
  // const Navigate = useNavigate();
  // const adduser = () => {
  //   Navigate("/Register");
  // };
  const { productdispatch } = DataState();

  useEffect(() => {}, [search]);

  return (
    <div className="flex   items-center justify-center">
      <div className="my-4">
        {useLocation().pathname.split("/")[1] !== "data" && (
          <div className="h-12 flex items-center">
            <input
              type="search"
              name="search"
              className=" md:w-[500px] w-[100px] h-10  text-black p-2"
              placeholder="search by name"
              onChange={(e) => {
                productdispatch({
                  type: "filter_by_search",
                  payload: e.target.value,
                });
              }}
            />
          </div>
        )}
      </div>
      {/* <div className="my-4">
        <button
          onClick={adduser}
          className="bg-blue-500 m-auto text-center text-white rounded-md p-1 text-xl font-bold h-10"
        >
          + adduser
        </button>
      </div> */}
    </div>
  );
}

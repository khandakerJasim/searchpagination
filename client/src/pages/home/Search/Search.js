import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setsearch] = useState("");
  // const Navigate = useNavigate();
  // const adduser = () => {
  //   Navigate("/Register");
  // };

  useEffect(() => {}, [search]);

  return (
    <div className="flex   items-center justify-center">
      <div className="my-4">
        <form action="">
          <div className="h-12 flex items-center">
            <input
              type="search"
              name="search"
              className=" md:w-[500px] w-[100px] h-10  text-black p-2"
              placeholder="search by name"
              onChange={(e) => setsearch(e.target.value)}
            />

            <button className="bg-blue-500 m-auto text-center text-white h-10 p-2  ">
              search
            </button>
          </div>
        </form>
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

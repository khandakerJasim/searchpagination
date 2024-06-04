//import React, { useContext } from "react";
import Search from "./Search/Search";
import Filter from "./filter/Filter";
import Table from "./table/Table";
//import { adddata } from "../../component/context/Contextprovider";

export default function Home() {
  // const getuser = async () => {
  //   const response = await getfunction();
  //   console.log(response);
  // };
  // useEffect(() => {
  //   getuser();
  // });

  return (
    <div className="home bg-gray-700 text-gray-100 h-auto w-full p-2 pb-10">
      <Search />

      <div className="md:flex gap-6 grid mx-auto">
        <div className=" lg:w-3/12 md:w-2/6 shadow-md p-4 bg-gray-200 text-gray-700 py-10 rounded-md mt-4 ">
          <Filter />
        </div>

        <div className="mt-4 bg-gray-200 text-gray-700">
          <Table />
        </div>
      </div>
    </div>
  );
}

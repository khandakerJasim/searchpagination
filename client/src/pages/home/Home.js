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
      <Filter />
      <Table />
    </div>
  );
}

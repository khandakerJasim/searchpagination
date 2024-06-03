import React, { createContext, useState } from "react";
export const adddata = createContext();

const Contextprovider = ({ children }) => {
  const [usedata, setusedata] = useState("");
  return (
    <div>
      <adddata.Provider value={{ usedata, setusedata }}>
        {children}
      </adddata.Provider>
    </div>
  );
};

export default Contextprovider;

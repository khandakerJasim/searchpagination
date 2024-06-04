import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { datareducer, DetailsReducer } from "./Reducer";
export const adddata = createContext();

const Contextprovider = ({ children }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6003/data")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  useEffect(() => {
    dispatch({ type: "Setdata", payload: data });
  }, [data]);
  console.log(data);

  const [state, dispatch] = useReducer(datareducer, {
    data: data,
    adddata: [],
    datadetails: [],
  });

  const fetchdatadetails = async (id) => {
    try {
      const res = await fetch(`http://localhost:6003/data/${id}`);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "Finddataid", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const [productstate, productdispatch] = useReducer(DetailsReducer, {
    bygender: "",
    byage: "",
    searchquery: "",
  });

  return (
    <div>
      <adddata.Provider
        value={{
          state,
          dispatch,
          productstate,
          productdispatch,
          fetchdatadetails,
        }}
      >
        {children}
      </adddata.Provider>
    </div>
  );
};

export default Contextprovider;
export const DataState = () => {
  return useContext(adddata);
};

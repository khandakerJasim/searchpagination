import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
//import Contextprovider from "./component/context/Contextprovider";
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );

  //<RouterProvider router={router}></RouterProvider>;
}

export default App;

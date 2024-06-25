import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainRoutes from "./Routes/MainRoutes";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 2000); // Change 2000 to the desired delay in milliseconds
    // return () => clearTimeout(timer);
  }, []);
  return !loading ? <MainRoutes /> : <Loader />;
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import { getCarsData, sendCarsData } from "./components/Store";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getCarsData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCarsData(cars));
  }, [cars, dispatch]);
  return (
    <div className="App">
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/admin" exact>
        <Admin></Admin>
      </Route>
      <Route path="/admin/:id" exact>
        <Admin></Admin>
      </Route>
    </div>
  );
}

export default App;

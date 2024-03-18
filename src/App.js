import React from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import Post from "./components/Post";
import CreateItem from "./components/CreateItem";

const App = () => {
 const dispatch =useDispatch()

const count = useSelector(state => state.custom.count);

  const minusHandler = () => {dispatch({ type: 'decrement' })};

  const plusHandler = () => {dispatch({ type: 'increment' })};
  


  return (
    <div>
      hi this is an app main componenet

      <Home/>
      <Post/>
      <CreateItem/>
      <div>
        <button onClick={minusHandler}> minus </button>
        <p> {count}</p>
        <button onClick={plusHandler}> plus </button>{" "}
      </div>
    </div>
  );
};

export default App;

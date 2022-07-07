import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, selectCount } from "./counterSlice";
const DisplayUpd = () => {
  const count = useSelector(selectCount);
  return <div>DisplayUpd {count}</div>;
};

export default DisplayUpd;

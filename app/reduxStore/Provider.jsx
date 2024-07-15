"use client";
import { Store } from "./Store";
import { Provider } from "react-redux";

const Reduxprovider = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default Reduxprovider;

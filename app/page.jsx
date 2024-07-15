"use client";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reduxStore/cartSlice/Cartslice";
import Card from "@/components/card component/Card";

const page = () => {
  const { value } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Card />
    </div>
  );
};

export default page;

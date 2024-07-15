import products from "@/products";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import profile from "@/public/images/profile.jpeg";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Card = () => {
  const [mobileNav, setMobilenav] = useState(false);
  const [profileMenu, setprofileMenu] = useState(false);
  const [profileNav, setprofileNav] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <nav className="sm: w-full  md:w-2/3 h-12 md:mt-5 border md:rounded-xl bg-gray-200 relative flex  md:justify-center sm:justify-between">
        {/*logo*/}
        <div className="absolute top-2 md:left-2 left-44 flex justify-center ">
          <div className="flex justify-center">
            <Link href="/">
              <span className="md:text-xl text-3xl font-bold">LOGO</span>
            </Link>
          </div>
        </div>
        {/* home,products,cart links */}
        <div className="flex flex-row  items-center justify-center gap-10 first-line md:mr-15 invisible md:visible">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-black text-white" : " "
            } text-black-500 hover:bg-gray-500 hover:text-white block rounded-xl px-3 py-2 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${
              pathname === "/products" ? "bg-black text-white" : " "
            } text-black-500 hover:bg-gray-500 hover:text-white block rounded-xl px-3 py-2 text-base font-medium`}
          >
            Products
          </Link>

          <Link
            href="/products/cart"
            className={`${
              pathname === "/products/cart" ? "bg-black text-white" : " "
            } text-black-500 hover:bg-gray-500 hover:text-white block rounded-xl px-3 py-2 text-base font-medium`}
          >
            Cart
          </Link>
        </div>
        <div className="flex flex-row gap-10 absolute top-1 right-1 justify-center">
          {/* input */}
          <div className="hidden xl:block  top-4" id="search">
            <input
              type="text"
              className="w-auto h-9 px-4 py-2 border rounded-xl focus:outline-none focus:border-gray-500"
              placeholder="search"
            />
          </div>
          {/*login*/}
          <div id="login">
            <button className=" md:flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-xl px-3 py-2 h-10">
              <FaGoogle className="inline" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Card;

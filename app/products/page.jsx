import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import profile from "@/public/images/profile.jpeg";
import Image from "next/image";

const Dasboard = () => {
  return (
    <div id="adminDasboard" className="h-screen flex flex-col">
      <div id="dashboard" className="h-32 bg-[#F6F5F2] flex flex-col">
        <div className="flex-1 flex justify-center items-center text-4xl text-[#758694] font-medium">
          Dashboard
        </div>
        <div className="ml-2 mb-2">
          <Link
            href="/"
            className="flex items-center w-fit px-4 py-1 rounded-lg bg-black text-white hover:bg-blue-500"
          >
            <FaArrowLeft className="inline mr-1" />
            Back
          </Link>
        </div>
      </div>
      <div id="container" className="flex-1 flex flex-row gap-2 text-white">
        <div className="w-64 bg-[rgb(85,133,175)] flex flex-col gap-6">
          <div className="h-32 flex flex-col justify-between">
            <div className="h-20 w-20 ml-2 mt-2">
              <Image
                src={profile}
                alt="admin"
                height={0}
                width={0}
                sizes="100"
                priority={true}
                className="h-full w-full rounded-2xl"
              />
            </div>
            <p className="text-center font-medium text-3xl">pavansai Kaviti</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-8 mt-8 text-xl">
            <Link href="/" className=" hover:underline">
              Products
            </Link>

            <Link href="/" className=" hover:underline">
              Users
            </Link>

            <Link href="/" className=" hover:underline">
              Orders
            </Link>

            <Link href="/" className=" hover:underline">
              Add Product
            </Link>

            <Link href="/" className=" hover:underline">
              <FaHome />
            </Link>
          </div>
        </div>
        <div className="flex-1 text-black flex flex-row justify-center ">
          <div className=" w-3/4 mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">NO</th>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">NAME</th>
                  <th className="border p-2">PRICE</th>
                  <th className="border p-2">QTY</th>
                  <th className="border p-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">wtggjhkjhgfdf</td>
                  <td className="border p-2">cgvbmn</td>
                  <td className="border p-2">$r6hj</td>
                  <td className="border p-2">bjb</td>
                  <td className="border p-2">hhj</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;

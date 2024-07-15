import React from "react";
import ipad from "@/public/images/ipad.png";
import iphone from "@/public/images/iphone.jpeg";
import mac from "@/public/images/mac.jpeg";
import Image from "next/image";
import Link from "next/link";

const Oder = () => {
  return (
    <div>
      <div className="flex flex-col justify-center lg:flex-row items-center mt-10 sm:gap-4">
        <div className="flex flex-col w-1/2  p-4 gap-8">
          <div className="flex flex-col gap-8">
            <p className="text-lg text-nowrap sm:text-3xl">
              <strong>Order Confirmed </strong>
              <span className=" text-blue-500 hover:underline">
                #1234567890
              </span>
            </p>
            <div className="flex flex-row gap-4 text-wrap">
              <div className="h-20 w-20">
                <Image
                  src={ipad}
                  alt="ipad"
                  className=" h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="h-20 w-20">
                <Image
                  src={mac}
                  className=" h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="h-20 w-20">
                <Image
                  src={iphone}
                  className=" h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="lg:mt-10 ">
            <p className=" text-lg text-nowrap sm:text-3xl p-2">
              <strong>shipping Address:</strong>
            </p>
            <div className=" border-b-2 bg-grey h-1 sm:w-1/2"></div>
            <p className="p-2">214 E ARMOUR BLVD</p>
            <div className=" border-b-2 bg-grey h-1 sm:w-1/2"></div>
            <p className="p-2">Kansas city, Mo</p>
            <div className=" border-b-2 bg-grey h-1 sm:w-1/2"></div>
            <p className="p-2">64111-109</p>
            <div className=" border-b-2 bg-grey h-1 sm:w-1/2"></div>
          </div>
        </div>
        <div className="sm:w-1/2 rounded-lg bg-gray-300 lg:w-1/4 ">
          <div className="text-nowrap ">
            <div className=" p-2">
              <p>
                <strong>Payment: </strong>
                <span className=" text-blue-500">success</span>
              </p>
            </div>
            <div className=" border-b-2 bg-grey h-1 "></div>
            <div className="p-2">
              <p>
                <strong>Delivery: </strong>
                <span className=" text-red-500">preparing Order</span>
              </p>
            </div>
            <div className=" border-b-2 bg-grey h-1 "></div>
            <div className=" p-2">
              <p>
                <strong>Total price:</strong> $1299.99
              </p>
            </div>
            <div className=" border-b-2 bg-grey h-1 "></div>
            <div className="p-4 flex justify-center">
              <div>
                <Link
                  href="/"
                  className=" w-fit px-4 py-2 rounded-3xl text-white bg-black"
                >
                  invoice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oder;

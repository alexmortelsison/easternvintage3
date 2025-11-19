import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

export default function NewArrivals() {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-linear-to-b from-black/80 to-black/10 absolute inset-0 z-10"></div>
      <Image
        src={"/newarrivals.png"}
        alt="New Arrivals"
        fill
        className="object-cover"
        priority
      />
      <div className="flex flex-col justify-center text-center text-white absolute inset-0 tracking-tighter z-60">
        <h1 className="text-7xl font-arual font-black">New Arrivals</h1>
        <p className="text-lg text-white/60 pt-4 tracking-wider">
          To own one is to transcend fashion and claim an heirloom of art,
          power, and prestige
        </p>
        <div className="mt-8 flex w-screen justify-center items-center space-x-4">
          <button className="cursor-pointer duration-100 text-2xl tracking-tighter">
            See all
          </button>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

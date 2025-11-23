import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

export default function BiggestLabels() {
  return (
    <div className="relative min-h-screen w-full bg-[#2b2b2b] pb-8">
      <div className="flex flex-col justify-center text-center text-white tracking-tighter z-60 mt-64">
        <h1 className="text-7xl font-arual font-black">Biggest Labels</h1>
        <p className="text-lg text-white/60 pt-4 tracking-wider">
          Imprints of history, preserved in the finest threads
        </p>
        <div className="mt-8 flex w-screen justify-center items-center space-x-4">
          <Image
            src={"/IMG_8599.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="object-cover h-[500] w-[450]"
          />
          <Image
            src={"/2.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="object-cover h-[500] w-[450]"
          />
          <Image
            src={"/3.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="object-cover h-[500] w-[450]"
          />
          <Image
            src={"/4.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="object-cover h-[500] w-[450]"
          />
        </div>
      </div>
    </div>
  );
}

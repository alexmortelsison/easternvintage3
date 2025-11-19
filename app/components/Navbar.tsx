import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "Story", link: "/story" },
];

export default function Navbar() {
  return (
    <div className="fixed inset-0 z-30 px-24 py-8 text-white inline-block">
      <div className="flex justify-between">
        <div>
          <Image
            src={"/EASTERNVINTAGELOGO.png"}
            alt={""}
            width={1000}
            height={1000}
            className="h-[250] w-auto"
          />
        </div>
        <div className="flex space-x-8">
          {navLinks.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex space-x-8">
          <p>Login</p>
          <div className="relative">
            <AiOutlineShopping className="text-2xl" />
            <div className="absolute -top-1 -right-3 text-white text-sm border bg-red-500 rounded-full px-1.5">
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

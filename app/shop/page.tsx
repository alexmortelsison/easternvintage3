"use client";
import {
  AiOutlineArrowDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function ShopPage() {
  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop1.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop1.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop1.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop1.3.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop2.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop2.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />

              <Image
                src={"/shop2.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative snap-start flex items-center justify-center h-screen">
        <div className="bg-linear-to-b from-black/30 via-black/20 to-black/20 absolute inset-0"></div>
        <div className="flex items-center pt-32 justify-center space-x-64 z-50">
          <div className="flex items-center">
            <Image
              src={"/shop3.png"}
              alt={""}
              height={2000}
              width={2000}
              className="w-auto h-[800]"
            />
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={"/shop3.1.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop3.2.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
              <Image
                src={"/shop3.3.png"}
                alt={""}
                height={2000}
                width={2000}
                className="w-[200] h-[200] object-contain border opacity-60 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="z-50 flex justify-center items-center">
            <div className="max-w-[800]">
              <h1 className="text-2xl font-bold text-black/60">
                Vintage Silk Kimono Jacket
              </h1>
              <p className="text-lg font-semibold text-black/40 pt-1">$900</p>
              <p className=" text-black/30 pt-4 tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
              <p className="text-black/40 text-sm pt-1 tracking-tighter">
                Black | 0120/840/999
              </p>
              <button className="border text-sm bg-[#2b2b2b] px-8 py-4 mt-6 text-white/90 hover:opacity-90 cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative snap-start flex items-center justify-center h-screen overflow-hidden">
        <Footer />
      </section>
    </div>
  );
}

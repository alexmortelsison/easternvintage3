"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import BiggestLabels from "./components/BiggestLabels";

export default function HomePage() {
  const h1ref = useRef(null);

  useEffect(() => {
    gsap.to(h1ref.current, {
      opacity: 1,
      delay: 1,
      duration: 3,
      ease: "power2.out",
    });
  });
  return (
    <div className="flex flex-col">
      <div className="min-h-screen relative overflow-hidden z-0">
        <div className="bg-linear-to-b from-black/80 to-black/10 absolute inset-0 z-0"></div>
        <video
          src={"/canvafashion.mp4"}
          autoPlay
          muted
          playsInline
          loop
          className="object-cover h-screen w-screen"
        />
        <div
          className="flex flex-col justify-center text-center text-white absolute inset-0 tracking-tighter opacity-0 z-50"
          ref={h1ref}
        >
          <h1 className="text-7xl font-arual font-black">One Chance To Own.</h1>
          <p className="text-lg text-white/60 pt-4 tracking-wider">
            Worn by nobility, crafted by master artisans, and preserved through
            time
          </p>
          <div className="mt-8">
            <button className="border px-16 py-4 bg-black/70 cursor-pointer duration-100">
              SHOP
            </button>
          </div>
        </div>
      </div>
      <NewArrivals />
      <BiggestLabels />
      <Footer />
    </div>
  );
}

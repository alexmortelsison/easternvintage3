"use client";
import {
  AiOutlineArrowDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function StoryPage() {
  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "auto",
    });
  };

  return (
    <div className="h-screen scroll-smooth scrollbar-hide bg-[#ebebeb] z-10">
      <div className="relative snap-start flex items-center justify-center h-screen">
        <div className="flex 4 justify-center space-x-32 z-0 max-w-7xl">
          <div className="flex space-x-2 items-center">
            <div className="bg-linear-to-b from-black/10 absolute inset-0"></div>
            <Image
              src={"/bnb.jpg"}
              alt={""}
              fill
              className="w-full h-screen object-cover blur-sm"
            />
          </div>
        </div>

        <div className="absolute justify-center items-center text-center">
          <Image
            src={"/bnb.jpg"}
            alt={""}
            height={800}
            width={800}
            className="object-cover shadow-2xl shadow-black rounded-2xl"
          />
        </div>
      </div>
      <div className="h-screen w-screen overflow-hidden flex">
        <div className="w-1/2 h-full relative">
          <Image
            src="/borum.jpg"
            alt="Description of the image"
            fill
            className="object-cover shadow-2xl z-50"
          />
        </div>
        <div className="w-1/2 h-full bg-[#2b2b2b] flex justify-center items-center text-center p-8 z-50">
          <div className="max-w-lg z-50">
            <p className="text-white/50 text-lg border-y py-16 z-50">
              "There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words
              etc."
            </p>
            <p className="text-center pt-8 text-white/50 italic">
              "At Eastern Vintage, we don&apos;t just sell fashion—we curate
              living history."
            </p>
            <p className="text-white/50 pt-2 italic">- Borum</p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen overflow-hidden flex">
        <div className="w-1/2 h-full bg-[#2b2b2b] flex justify-center items-center text-center p-8 z-50">
          <div className="max-w-lg z-50">
            <p className="text-white/50 text-lg border-y py-16">
              "There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words
              etc."
            </p>
            <p className="text-center pt-8 text-white/50 italic">
              "It's about bridging the past with the present."
            </p>
            <p className="text-white/50 pt-2 italic">- Bonasa</p>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/borump.jpg"
            alt="Description of the image"
            fill
            className="object-cover shadow-2xl object-[50%_20%] z-50"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import logo from "@/public/img/cropped-header-logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRegHeart,
} from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
const HeaderTop = () => {
  return (
    <div className="lg:flex hidden  justify-between h-32 items-center max-w-7xl mx-auto">
      <div>
        <Image src={logo} height={200} width={200} alt="" />
      </div>
      <div className="">
        <div className="flex">
          <input
            className="border border-primary  w-2/4  py-2 rounded-l-full pl-3   outline-none"
            type="text"
            placeholder="search your favorite books... "
          />
          <span className="flex justify-center items-center  bg-primary rounded-r-full w-14">
            <IoSearch color="white" size={21} />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaFacebookF
          size={20}
          className="text-primary cursor-pointer hover:text-black"
        />
        <FaTwitter
          size={20}
          className="text-primary cursor-pointer hover:text-black"
        />
        <FaInstagram
          size={20}
          className="text-primary cursor-pointer hover:text-black"
        />
        <FaYoutube
          size={20}
          className="text-primary cursor-pointer hover:text-black"
        />
        <div className=" flex items-center gap-3 cursor-pointer hover:text-black">
          <div className="">
            <div className="cursor-pointer mt-4">
              <FaRegHeart size={27} className="text-primary" />
            </div>
            <div className="relative -top-9 left-4 ">
              <p className="bg-[#bbb]  flex justify-center text-sm items-center w-5 h-5 rounded-full text-white">
                0
              </p>
            </div>
          </div>
          <div className="mt-3">
            <AiOutlineShopping size={28} className="text-primary" />
            <div className="relative -top-9 left-4 ">
              <p className="bg-[#bbb]  flex justify-center text-sm items-center w-5 h-5 rounded-full text-white">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

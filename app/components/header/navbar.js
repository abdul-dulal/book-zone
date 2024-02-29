"use client";
import Link from "next/link";
import React from "react";
import HeaderTop from "./headerTop";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import DropDown from "../dropdown";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <HeaderTop />
      <div className="bg-primary">
        <nav className="relative  max-w-7xl mx-auto text-white">
          <div className="container mx-auto flex justify-between items-center h-full">
            <ul className="flex gap-5">
              <li className="  hover:text-white">
                <Link
                  className={` ${
                    pathname === "/home" ? "dot text-red-700" : ""
                  }`}
                  href="/home"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  className={` ${
                    pathname === "/writer" ? "dot text-red-700" : ""
                  }`}
                  href="/writer"
                >
                  লেখক
                </Link>
              </li>

              <li className="hoverable cursor-pointer">
                <div className="flex gap-1">
                  বিষয় <FaAngleDown className="mt-1" />
                </div>
                <div className="p-6 mega-menu mt-6 mb-16 sm:mb-0 shadow-xl bg-white">
                  <div className="container  mx-auto w-full flex flex-wrap justify-between mx-2">
                    <ul className=" w-full  text-black sm:w-1/2 lg:w-1/4 border-gray-200 border-b sm:border-r lg:border-b-0 ">
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/academic">একাডেমিক বুক</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/boimela">বইমেলা</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/history">ইতিহাস ও ঐতিহ্য</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/adventure">
                          গোয়েন্দা ভৌতিক ও অ্যাডভেঞ্চার
                        </Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/travel-foreign">ভ্রমণ ও প্রবাস</Link>
                      </li>
                    </ul>
                    <ul className=" w-full text-black sm:w-1/2 lg:w-1/4 border-gray-200 border-b sm:border-r-0 lg:border-r lg:border-b-0 ">
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/novel">উপন্যাস</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/islamic">ইসলামিক বই</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/life-story">
                          জীবনী স্মৃতিচারণ ও সাক্ষাৎকার
                        </Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/computer-programing">
                          কম্পিউটার ফ্রিল্যান্সিং ও প্রোগ্রামিং
                        </Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/agriculture-farmer">কৃষি ও কৃষক</Link>
                      </li>
                    </ul>
                    <ul className=" w-full text-black sm:w-1/2 lg:w-1/4 border-gray-200 border-b sm:border-b-0 sm:border-r md:border-b-0 ">
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/books-of-drama">নাটকের বই</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/english-book">ইংরেজি ভাষার বই</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/liberation-war">মুক্তিযুদ্ধ</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/language-dictionary">ভাষা ও অভিধান</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/food-and-nutrition">
                          রান্নাবান্না, খাদ্য ও পুষ্টি
                        </Link>
                      </li>
                    </ul>
                    <ul className=" w-full text-black sm:w-1/2 lg:w-1/4 border-gray-200">
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/poems">ছড়া, কবিতা ও আবৃত্তি</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/science-fiction">সায়েন্স ফিকশন</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/medical">মেডিকেল</Link>
                      </li>
                      <li className="w-full hover:bg-primary hover:text-white py-[6px] pl-3">
                        <Link href="/admission-exam">
                          ভর্তি নিয়োগ পরীক্ষা বই
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/publisher">প্রকাশনী</Link>
              </li>
              <li>
                <Link href="/academic">একাডেমিক বুক</Link>
              </li>
              <li>
                <Link href="/islamic">ইসলামিক বই</Link>
              </li>
              <li>
                <Link href="/boimela">বইমেলা </Link>
              </li>
              <li>
                <Link href="/about">আমাদের সম্পকে</Link>
              </li>
              <li>
                <Link href="/blog">ব্লগ</Link>
              </li>
              <li>
                <Link href="/contact">যোগাযোগ</Link>
              </li>
            </ul>
            <div className="relative block py-2 ">
              <DropDown />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

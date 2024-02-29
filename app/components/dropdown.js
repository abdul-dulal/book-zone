"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const DropDown = () => {
  return (
    <div class="dropdown inline-block relative">
      <FaRegUserCircle size={30} color="white" />
      <ul class="dropdown-menu  absolute hidden right-0 text-white pt-3 w-32">
        <li class="p-2 bg-primary  text-sm font-rupali font-normal ">
          <Link href="/register">Register</Link>
        </li>
        <hr />
        <li class="p-2 bg-primary  text-sm font-rupali font-normal">
          <Link href="/signin">SignIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;

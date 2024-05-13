import React from "react";

const Banner = () => {
  return (
    <div className="relative ">
      <div
        className="h-64 w-full"
        style={{
          background: `url('img/page-title.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black opacity-50 h-64 w-full absolute top-0 left-0 "></div>
        <div className="max-w-7xl mx-auto z-50">
          <h1 className="text-white">hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

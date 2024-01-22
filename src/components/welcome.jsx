import React from "react";
import Image from "next/image";
import backgroundImage from "/src/assets/images/programmers.jpg";

export default function Welcome() {
  return (
    <div
      className="welcome w-5/12 bg-zinc-950 text-white h-full 
        flex flex-col justify-center items-center relative"
    >
      <Image
        src={backgroundImage}
        width={100}
        height={100}
        alt="background image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          top: "0",
          zIndex: "1",
        }}
      />
      <div
        className="overlay absolute left-0 top-0 flex flex-col justify-center
        bg-gradient-to-b from-blue-600 h-full w-full"
        style={{ zIndex: "2" }}
      >
        <div className="basis-1/2">
          <h2 className="text-3xl">XOrithm</h2>
          <h1 className="text-5xl mt-8 text-white">Server Status</h1>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import EmailBox from "./EmailBox"; // Assuming EmailBox is the popup contact component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@tanimuldihan.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <main className="relative h-screen w-full font-geistSans bg-[url('/bgBluredHero.avif')] bg-cover bg-center bg-no-repeat flex flex-col justify-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex  flex-col items-center justify-center px-3 text-center mt-20 top-3">
        <h1 className="animate-fadeInUp my-2 w-full text-xl font-semibold text-zinc-100 opacity-90 md:text-3xl lg:text-5xl">
          Speed. Scalability. Simplicity.
          <br /> Your next web app{" "}
          <span
            className="text-6xl font-romanesco font-normal bg-gradient-to-b from-zinc-700 via-zinc-200
           to-zinc-50 bg-clip-text tracking-wide text-transparent"
          >
            built right.
          </span>
        </h1>

        <h2 className="animate-fadeInUp mt-4 mb-6 flex flex-col items-center justify-center text-xl text-zinc-400 sm:flex-row md:text-lg lg:text-xl">
          <span className="flex items-center justify-center">
            Hello, I&apos;m Tanimul Islam
            <div className="px-2">
              <Image
                src="/tanimul.JPEG"
                alt="Tanimul Islam"
                width={80}
                height={80}
                className="mx-2 w-16 md:w-20 rounded-3xl transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </span>
          <span>a Full Stack Developer.</span>
        </h2>
      </div>

      {/* Connect + Email Buttons */}
      <div className="relative z-20 flex justify-between mt-6 mx-auto w-full max-w-[400px]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden 
          rounded-full border border-white/10 bg-white/10 py-2 pl-3 pr-1 text-base font-medium 
          opacity-85 backdrop-blur-md transition-all hover:bg-transparent"
        >
          <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
            Let&apos;s Connect
          </span>
          <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
          <span className="z-10 flex items-center justify-center rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 py-3 text-base text-white/75 transition-all duration-300 cursor-pointer hover:text-white/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          hello@tanimulislam.me
        </button>
      </div>

      {/* Bottom Curve */}
      <div className="z-10 mt-10  ">
        <div
          className="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-24 h-72 w-screen max-w-[--breakpoint-2xl] 
          overflow-hidden [mask-image:radial-gradient(80%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] 
          before:opacity-70"
        >
          <div
            className="absolute top-1/2 -left-1/2 z-20 aspect-[1/1.25] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a]  
            shadow-[inset_0_3px_20px_#fff,0_-10px_50px_1px_#ffffff6e] "
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* EmailBox Content */}
          <div className="relative z-10 p-4">
            <EmailBox />
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-red-400 text-xl transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Hero;

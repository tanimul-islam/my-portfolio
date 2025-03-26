import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-[#040408] flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-16 font-geistSans text-white">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h2 className="text-sm mb-4 text-violet-100">MORE ABOUT ME</h2>
        <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
          <span className="font-semibold">
            Full Stack Developer and <br /> a little bit of{" "}
          </span>
          <span className="font-romanesco text-6xl md:text-7xl tracking-wide bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            everything
          </span>
        </h1>
        <p className="text-lg text-violet-100 leading-relaxed">
          a passionate full-stack developer based in Toronto, driven by a love
          for building seamless, user-focused web experiences. From frontend
          design to backend logic, I enjoy solving real-world problems with
          clean, scalable code. My toolkit includes React, Node.js, Firebase,
          and Tailwind CSS — and I&apos;m always excited to explore new
          technologies. When I&apos;m not coding, I&apos;m brainstorming ideas,
          learning new skills, or diving into creative projects. I believe
          growth comes from curiosity, and I try to bring that mindset into
          everything I do. I wake up each day excited to create, learn, and make
          something meaningful!
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-[420px] h-[420px] flex items-center justify-center">
        {/* Outer Circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-violet-600 shadow-2xl"></div>

        {/* Inner Circle with Image */}
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-violet-600 shadow-xl">
          <Image
            src="/dihan-rounded.png"
            alt="Picture of the author"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

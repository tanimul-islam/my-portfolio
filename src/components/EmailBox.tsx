import React from "react";
import { Mail, Calendar } from "lucide-react";

const EmailBox = () => {
  return (
    <div className="max-w-md w-full mx-auto bg-black/80 rounded-2xl p-6 shadow-lg backdrop-blur-md text-white space-y-6">
      {/* Drag Handle (Top Line) */}
      <div className="mx-auto h-1 w-12 rounded-full bg-white/20" />

      {/* Social Icons */}
      <div className="flex justify-center space-x-6">
        {/* <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition" />
        <Github className="w-5 h-5 cursor-pointer hover:text-gray-400 transition" />
        <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400 transition" />
        <Code className="w-5 h-5 cursor-pointer hover:text-purple-400 transition" /> */}
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:bg-white/20 transition">
          <Mail className="w-4 h-4" />
          hello@tanimuldihan.me
        </button>
        <a
          href="https://calendly.com/tanimul-i/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-md px-4 py-2 hover:bg-white/20 transition"
        >
          <Calendar className="w-4 h-4" />
          Book a Call
        </a>
      </div>

      {/* Divider */}
      <div className="text-center text-white/50 text-sm">Or send a message</div>

      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-md bg-black/30 border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <textarea
          rows={4}
          placeholder="Your message"
          className="w-full rounded-md bg-black/30 border border-white/20 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black rounded-md py-2 font-medium hover:bg-white/90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailBox;

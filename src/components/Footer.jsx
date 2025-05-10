import React from "react";
import logo1 from "../assets/imgs/logo1.png";
import logo2 from "../assets/imgs/logo2.png";
import logo3 from "../assets/imgs/logo3.png";
import logo4 from "../assets/imgs/logo4.png";
import logo5 from "../assets/imgs/logo5.png";
import logo6 from "../assets/imgs/logo6.png";
import logo7 from "../assets/imgs/logo7.png";
import logo8 from "../assets/imgs/logo8.png";
import brand_logo from "../assets/imgs/brand_logo.svg";

function Footer() {
  return (
    <>
      <section className="bg-black lg:px-20 md:px-5  px-2">
        <div className="grid md:grid-cols-9 md:gap-5 gap-2 grid-cols-3 items-center justify-between py-5 w-full  rounded">
          <div className="">
            <a href="">
            <img src={logo1} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo2} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo3} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo4} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo5} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo6} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo7} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            <img src={logo8} alt="" className="w-24" />
          </a>
          </div>
          <div className="">
          <a href="">
            {" "}
            <div className="rounded-full border border-gray-300 h-20 w-20 flex justify-center items-center">
              {" "}
              <h2 className="text-xl p-3 text-white">+18</h2>
            </div>
          </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-4 grid-cols-2 justify-between md:mt-0 mt-5">
          <div className="md:space-y-3 space-y-1">
            <img src={brand_logo} alt="" className="w-320 md:h-20 h-10" />
            <div className="">
              <a href="" className="text-white font-medium  text-sm">
                {" "}
                Website: www.govindaexch.com
              </a>
            </div>
            <div className="">
              {" "}
              <a href="" className="text-white font-medium  text-sm">
                {" "}
                Email: support@govindaexch.com
              </a>
            </div>
            <div className="">
              {" "}
              <a href="" className="text-white   font-medium  text-sm">
                {" "}
                Whatsapp: <span className="underline">+91 92535 75593</span>
              </a>
            </div>
          </div>

          <div className="">
            <h1 className="font-bold md:text-xl  text-base pb-5 text-[#f8bb00] capitalize">
              govindaexch
            </h1>

            <ul className="md:space-y-3 space-y-1">
              {[
                "Blog govindaexch",
                "About Us",
                "Responsible Gaming",
                "govindaexch Affiliates",
                "Contact Us",
              ].map((item, i) => (
                <li key={i} className="group relative pl-2 ">
                  <span className="absolute left-0 top-1/2   -translate-y-1/2 w-2 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <a
                    href="#"
                    className="text-white font-medium text-sm inline-block transform transition-all duration-300 group-hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="">
            <h1 className="font-bold md:text-xl  text-base pb-5 text-[#f8bb00] capitalize">
            Usage and Terms
            </h1>

            <ul className="md:space-y-3 space-y-1">
              {[
                "Terms and Conditions",
                "Privacy Policy",
                "Betting Rules",
                "How to Play",
                "Rules Regulations",
              ].map((item, i) => (
                <li key={i} className="group relative pl-2 ">
                  <span className="absolute left-0 top-1/2   -translate-y-1/2 w-2 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <a
                    href="#"
                    className="text-white font-medium text-sm inline-block transform transition-all duration-300 group-hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="font-bold md:text-xl  text-base pb-5 text-[#f8bb00] capitalize">
            Quick Links
            </h1>

            <ul className="md:space-y-3 space-y-1">
              {[
                "FAQ",
                "Make a Call",
                "Download APK",
                "Deposits and Withdrawals Rules",
                "Cookie Policy",
              ].map((item, i) => (
                <li key={i} className="group relative pl-2 ">
                  <span className="absolute left-0 top-1/2   -translate-y-1/2 w-2 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <a
                    href="#"
                    className="text-white font-medium text-sm inline-block transform transition-all duration-300 group-hover:translate-x-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-white font-bold text-[11px] py-4 md:text-start text-center">You must be over 18 years old, or the legal age at which gambling or gaming activities are allowed under the law or jurisdiction that applies to you. You must reside in a country in which access to online gambling to its residents.</div>
      </section>
    </>
  );
}

export default Footer;

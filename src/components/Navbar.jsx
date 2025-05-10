import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaTelegram,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import brand_logo from "../assets/imgs/brand_logo.svg";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Login_Form from "./Login_Form";



function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const navItems = [
    { name: "Home" },
    { name: "In-Play" },
    { name: "IPL 2025" },
    { name: "Cricket", showLive: true },
    { name: "Soccer", showLive: true },
    { name: "Tennis", showLive: true },
    { name: "Horse", showLive: true },
    { name: "Greyhound", showLive: true },
    { name: "Indian Poker" },
    { name: "Indian Poker II" },
    { name: "Aviator" },
    { name: "AE SEXY" },
    { name: "Evolution" },
    { name: "Live Casino" },
    { name: "Vivo" },
    { name: "Betgames" },
    { name: "Casino III" },
  ];
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" }); // 'May'
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {/* ===============NAVBAR TOP START============ */}
      
      <div className="flex justify-between items-center bg-[#ffc629] py-1.5 px-1">
  <div className="flex md:gap-5 gap-2 items-center">
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaInstagram />
      <span className="hidden sm:inline">Instagram</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaFacebookF />
      <span className="hidden sm:inline">Facebook</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaTwitter />
      <span className="hidden sm:inline">Twitter</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaTelegram />
      <span className="hidden sm:inline">Telegram</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaWhatsapp />
      <span className="hidden sm:inline">Whatsapp</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white uppercase">
      <FaQuestionCircle />
      <span className="hidden sm:inline">FAQ</span>
    </div>
    <div className="flex items-center gap-1 text-xs text-black hover:text-white capitalize">
      <FaMobileScreen />
      <span className="hidden sm:inline">Application</span>
    </div>
  </div>
  <div className="text-center text-xs text-black font-normal">
    {formatDate(currentTime)}
  </div>
</div>

      {/* ===============NAVBAR TOP END============ */}

      <div className="bg-black flex justify-between items-center px-3 py-2">
        <div className="">
          <a href="">
            <img src={brand_logo} alt="" className="md:w-56 md:h-20 w-20 h-20" />
          </a>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex bg-[#ffc629] border border-white rounded-[10px]  px-3 py-2 gap-1">
            <FaUser />
            <button className="text-sm text-black font-bold  uppercase" onClick={() => setShowModal(true)}>
              log in
            </button>
          </div>
          <div className="flex bg-[#ffc629] border border-white rounded-[10px]  px-3 py-2">
            <button className="text-sm text-black font-bold  uppercase">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ffc629] relative text-black font-semibold flex flex-wrap  overflow-visible lg:py-0 py-5 ">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex  flex-col items-center rounded-xs
            ${
              active === item.name
                ? "bg-gradient-to-r from-yellow-600 to-yellow-300 text-white"
                : ""
            }
          `}
          >
            {item.showLive && (
              <div className="absolute md:left-10 left-5 -top-2 z-10  text-xs bg-white text-red-500 pl-2 flex items-center rounded-[4px]">
                <span className="text-[8px] font-bold mr-0.5 animate-pulse">
                  LIVE
                </span>
                <span className="bg-red-500 text-white font-bold text-[8px] px-1 rounded-r-[4px]">
                  0
                </span>
              </div>
            )}

            <button
              onClick={() => setActive(item.name)}
              className={`px-2 py-2 w-full text-sm whitespace-nowrap ${
                active === item.name
                  ? "text-white font-bold"
                  : "hover:bg-gradient-to-r from-yellow-600 to-yellow-300 hover:text-white"
              } ${item.name === "IPL 2025" ? "blink ipl-animated-text " : ""}`} // Add the "blink" class only to IPL 2025
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
      {showModal && <Login_Form onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Navbar;

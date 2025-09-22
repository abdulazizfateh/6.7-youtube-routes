import React, { useState } from "react";
import { FaVideo, FaBell, FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconImg from "../../assets/youtube.svg";
const Header = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const handleToggleSideBar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   return (
      <header className="bg-black shadow-md sticky top-0 z-50">
         <div className="max-w-[1600px] mx-auto flex items-center justify-between p-2 px-4">

            <div className="flex items-center gap-4">
               <button onClick={handleToggleSideBar} className="text-2xl text-white">
                  <AiOutlineMenu />
               </button>
               <Link to="/" className="text-2xl font-bold text-red-600">
                  <img src={IconImg} alt="rasm" />
               </Link>
            </div>

            <div className="flex flex-1 max-w-[600px] mx-4">
               <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 border bg-black text-white  border-[#303030] rounded-l-full px-4 py-2 focus:outline-none"
               />
               <button className="text-white px-4 rounded-r-full border border-[#303030]">
                  <AiOutlineSearch size={20} />
               </button>
            </div>

            <div className="flex items-center gap-4 text-gray-700 text-xl">
               <FaVideo className="cursor-pointer text-white" />
               <FaBell className="cursor-pointer text-white" />
               <FaUserCircle className="cursor-pointer text-white" />
            </div>
         </div>
      </header>
   );
};

export default Header;

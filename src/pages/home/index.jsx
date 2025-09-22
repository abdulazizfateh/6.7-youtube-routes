import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
   FaHome,
   FaCompass,
   FaRegPlayCircle,
   FaHistory,
   FaVideo,
   FaClock,
   FaThumbsUp,
   FaListUl
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Home = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get("https://dummyjson.com/products?limit=20&skip=40")
         .then((res) => setData(res.data.products))
         .catch((err) => console.log(err));
   }, []);


   return (
      <div className="max-w-[1600px] m-auto bg-black pl-4 pr-4">
         <div className="w-full gap-4 flex">
            <div className="w-[20%] bg-black min-h-screen p-4 text-white sticky top-0 h-screen">
               <ul className="mt-4 flex flex-col gap-4 text-white">
                  <Link to="/">
                     <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:underline flex items-center gap-3">
                        <FaHome className="text-xl" /> <span>Home</span>
                     </li>
                  </Link>
                  <Link to="/contact">
                     <li
                        onClick={() => scrollToSection("explore")}
                        className="cursor-pointer hover:underline flex items-center gap-3"
                     >
                        <FaCompass className="text-xl" /> <span>Contact</span>
                     </li>
                  </Link>
                  <li
                     onClick={() => scrollToSection("subs")}
                     className="flex items-center gap-3"
                  >
                     <FaRegPlayCircle className="text-xl" /> <span>Contact</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("library")}
                     className="flex items-center gap-3"
                  >
                     <FaListUl className="text-xl" /> <span>Library</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("history")}
                     className="flex items-center gap-3"
                  >
                     <FaHistory className="text-xl" /> <span>History</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("videos")}
                     className="flex items-center gap-3"
                  >
                     <FaVideo className="text-xl" /> <span>Your Videos</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("later")}
                     className="flex items-center gap-3"
                  >
                     <FaClock className="text-xl" /> <span>Watch Later</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("liked")}
                     className="flex items-center gap-3"
                  >
                     <FaThumbsUp className="text-xl" /> <span>Liked Videos</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <FiChevronDown className="text-xl" /> <span>Show More</span>
                  </li>
               </ul>
               <ul className="flex flex-col gap-3 my-7">
                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Library</span>
                  </li>

                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>History</span>
                  </li>

                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/10.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Your Videos</span>
                  </li>

                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/80.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Watch Later</span>
                  </li>

                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/8.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Liked Videos</span>
                  </li>

                  <li className="flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/18.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Show More</span>
                  </li>
               </ul>
            </div>

            <div className="w-[80%] space-y-20 p-5">
               <section id="home" className="min-h-[400px]">
                  <h2 className="text-2xl font-bold text-white mb-4">Home</h2>
                  <div className="grid grid-cols-3 gap-2">
                     {data.map((value) => (
                        <div
                           key={value.id}
                           className="flex flex-col border-2 border-[#303030] rounded-[10px] shadow hover:shadow-lg transition p-3 bg-neutral-900"
                        >
                           <img
                              src={value.thumbnail}
                              alt={value.title}
                              className="w-full h-[180px] object-cover rounded-md mb-3"
                           />
                           <div className="flex-1 flex flex-col justify-end gap-2">
                              <h2 className="text-md leading-tight line-clamp-1">
                                 {value.title}
                              </h2>
                              <p className="text-sm text-[#a9a9a9] line-clamp-2">{value.description}</p>

                              <p className="text-white font-semibold ">${value.price}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>


            </div>
         </div >
      </div >
   );
};

export default Home;

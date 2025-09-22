import React, { useState, useEffect } from "react";
import axios from "axios";
import Imgess from "../../assets/Channel-Cover.png";
import { IoMdSearch } from "react-icons/io";
import { FaChevronRight, FaHome, FaCompass, FaRegPlayCircle, FaHistory, FaVideo, FaThumbsUp, FaListUl, FaClock } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Youtub from "../../assets/youtube.png";
import { Link } from 'react-router-dom'


const ProductCards = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios
         .get("https://dummyjson.com/products?limit=20")
         .then((res) => setProducts(res.data.products.slice(0, 10)))
         .catch((err) => console.log(err));
   }, []);


   return (
      <div className="max-w-[1600px] mx-auto px-4 bg-black">
         <div className="flex gap-4">
            <div className="w-[20%] bg-black min-h-screen p-4 text-white sticky top-0 h-screen">
               <ul className="mt-4 flex flex-col gap-4 text-white">
                  <Link to="/">
                     <li className="cursor-pointer hover:underline flex items-center gap-3">
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

            <div className="w-[80%] space-y-20 bg-black text-white">
               <section id="home" className="min-h-[400px]">
                  <img className="w-full" src={Imgess} alt="Channel Cover" />
                  <div className="p-5 bg-[#181818]">
                     <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-5">
                           <img className="w-[80px] h-[80px] rounded-full" src={Imgess} alt="Channel" />
                           <div>
                              <h1 className="font-bold">Marcus Levin</h1>
                              <p>1.2M subscribers</p>
                           </div>
                        </div>
                        <button className="w-[120px] h-[38px] rounded-[2px] bg-red-700 text-white">Subscribe</button>
                     </div>

                     <div className="p-4">
                        <nav className="flex justify-between items-center">
                           <div className="flex gap-2">
                              <button className="w-[104px] h-[48px]">HOME</button>
                              <button className="w-[104px] h-[48px]">VIDEOS</button>
                              <button className="w-[104px] h-[48px]">PLAYLISTS</button>
                              <button className="w-[104px] h-[48px]">COMMUNITY</button>
                              <button className="w-[104px] h-[48px]">CHANNELS</button>
                              <button className="w-[104px] h-[48px]">ABOUT</button>
                              <button className="w-[48px] h-[48px] text-3xl"><IoMdSearch /></button>
                           </div>
                           <button className="text-3xl"><FaChevronRight /></button>
                        </nav>
                     </div>

                     <div className="flex items-center">

                        <div className="w-full md:w-1/2">
                           <iframe width="560" height="315" src="https://www.youtube.com/embed/kCwZl3wo9tY?si=G-4vV0v12ATlAkYz&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="w-full md:w-1/2">
                           <h1 className="font-bold text-lg">Blind Woodturner: Turning passion into fine art</h1>
                           <p className="mt-5 mb-5 text-gray-400">576,969 views · 3 weeks ago</p>
                           <p className="text-gray-300">
                              Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
                           </p>
                        </div>
                     </div>

                     <div className="mt-8">
                        <div className="flex gap-4 items-center mb-4">
                           <h1 className="text-xl font-bold">Search On ‘21</h1>
                           <p className="text-xl font-bold cursor-pointer">Play all</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                           {products.map((product) => (
                              <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-[#1f1f1f]">
                                 <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded-md mb-2" />
                                 <h2 className="font-semibold text-lg">{product.title}</h2>
                                 <p className="text-gray-400 text-sm">{product.brand}</p>
                                 <p className="text-gray-200 font-bold">${product.price}</p>
                              </div>
                           ))}
                        </div>
                     </div>


                  </div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default ProductCards;

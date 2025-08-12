import {
  HandCoins,
  ListTodo,
  ShieldCheck,
  Star,
  User,
  Wallet,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4 ">
      <HandCoins
        size={100}
        className="font-bold text-6xl text-center mx-auto my-12 text-gradient-to-b from-red-400 to-yellow-500"
      />
      <header className="selection:bg-indigo-600 selection:text-white">
        <span className="flex flex-col text-6xl  font-sans font-bold text-center my-8">
          <p className="selection:text-white">Small investment,</p>
          <p className="text-indigo-500 selection:text-white "> big returns</p>
        </span>
        <div className="flex gap-6 m-12 text-sm text-zinc-700 mx-auto justify-center ">
          <span className="flex gap-2">
            <Wallet size={18} />
            <span>One-time payment</span>
          </span>
          <span className="flex gap-2">
            <ListTodo size={18} />
            <span> All the feature in every plan</span>
          </span>
          <span className="flex gap-2">
            <HandCoins size={18} />
            <span>All the feature in every plan</span>
          </span>
        </div>
        <div className="fromCustomer">
          <div className="users flex-1 flex justify-center items-center mb-4">
            <div className="flex -space-x-1 relative">
              <div className="z-30 border-2 border-white rounded-full overflow-hidden bg-gray-100">
                <User size={32} className="text-indigo-500" />
              </div>
              <div className="z-20 -ml-2 border-2 border-white rounded-full overflow-hidden bg-gray-100">
                <User size={32} className="text-indigo-600" />
              </div>
              <div className="z-10 -ml-2 border-2 border-white rounded-full overflow-hidden bg-gray-100">
                <User size={32} className="text-indigo-700" />
              </div>
              <div className="z-0 -ml-2 border-2 border-white rounded-full bg-indigo-500 text-white flex items-center justify-center w-[32px] h-[32px] text-xs font-semibold">
                +5
              </div>
            </div>
            <div className="right ml-8">
              <div className="stars flex">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm text-zinc-700 font-stretch-105% font-bold">
                from 1,000 + happy customers
              </p>
            </div>
          </div>
          <div className="p-6 m-12 text-sm text-zinc-700 w-98 h-98 bg-zinc-100 rounded-2xl">
            <div>
              <div className="top">personal</div>
            </div>
            <div className="mid">Rs. 299.00</div>
            
            <div className="bot">features</div>
          </div>
        </div>
      </header>
      <div className="midcontent"></div>
      <footer className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vendora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;

import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { useStoreIdStore } from "@/stores/useStoreIdStore";

const NavBar = () => {

  const { stores } = useStoreIdStore();

  const Store = {
    logo: (
      <img
        src="https://shorturl.at/N4PUo"
        alt="Store Logo"
        className="w-16 h-16  object-cover rounded-full"
      />
    ),
    name: "Pasal",
    category: "Category",
    cart: "Cart",
    aboutUs: "About Us",
  };

  return (
    <div>
      <ol className="flex gap-4 wrap-normal h-20 items-center bg-white  p-2 justify-evenly shadow-md">
        <li
          className="
        hover:cursor-pointer text-bold text-2xl font-sans flex items-center gap-2"
        >
          {/* {Store.logo} */}
          {stores[0].name}
        </li>
        <div className="flex gap-4 hover:cursor-pointer transition-all  ">
          <li className="min-w-[80px] text-center ">Category</li>
          <li className="min-w-[80px]  text-center">About Us</li>
        </div>

        <div className="flex gap-4 hover:cursor-pointer">
          <IoSearch size={28} />

          <CiShoppingCart size={28} />
        </div>
      </ol>
    </div>
  );
};

export default NavBar;

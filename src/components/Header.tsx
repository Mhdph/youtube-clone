import React from "react";
import { MdAccountCircle, MdOutlineSearch, MdMic } from "react-icons/md";
import { useSelector } from "react-redux";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <div
      className={`${
        theme === "dark" ? "border-gray-800" : ""
      } sticky border-b py-8  top-0 bg-background-default h-14`}
    >
      <div className="flex items-center justify-end h-full px-5 relative">
        <div className="relative flex w-[40%] mr-[420px] text-gray-600">
          <input
            type="search"
            className={`${
              theme === "dark"
                ? "border-[#323232] border-2 bg-black"
                : "border bg-transparent"
            } block w-full pl-2 py-2 pr-10 rounded outline-none`}
            name="search"
            placeholder="Search"
            required
          />
          <span
            className={`${
              theme === "dark" ? "bg-[#323232]" : "bg-[#F0F0F0]"
            }  absolute inset-y-0 right-0 pr-2 flex  items-center pl-2`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className={`${
                theme === "dark" ? "text-[#F0F0F0]" : "text-gray-700"
              } w-6 h-6  `}
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
        </div>
        <div>
          <a href="/signin" style={{ textDecoration: "none" }}>
            <button className="py-2 w-full px-4 bg-transparent border border-solid border-[#3ea6ff] text-[#3ea5ff] font-medium cursor-pointer flex items-center gap-1 ">
              <MdAccountCircle />
              SIGN IN
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;

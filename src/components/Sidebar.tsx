import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
  MdOutlineAccountCircle,
  MdLibraryMusic,
  MdOutlineSportsBaseball,
  MdOutlineSportsEsports,
  MdOutlineMovie,
  MdOutlineArticle,
  MdOutlineLiveTv,
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineSettingsBrightness,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeTheme } from "../app/themeSlice";
type sidebarProps = {};

const Sidebar: React.FC<sidebarProps> = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("");
  dispatch(changeTheme(theme));

  return (
    <div className="flex-1 bg-background-default text-primary-default  h-full 2xl:h-screen text-sm sticky top-0">
      <div className="px-4 py-6">
        <a href="/" className="">
          <div className="flex items-center gap-1 font-bold mb-6">
            <img className="h-6" src={Logo} />
            Youtube
          </div>
        </a>
        <div className="item">
          <MdHome />
          Home
        </div>
        <div className="item">
          <MdExplore />
          Explore
        </div>
        <div className="item">
          <MdSubscriptions />
          Subscriptions
        </div>
        <hr
          className={`${
            theme === "dark" ? "opacity-10" : "opacity-90"
          } my-4 border-solid border-[#f5f5f5]`}
        />{" "}
        <div className="item">
          <MdVideoLibrary />
          Library
        </div>
        <div className="item">
          <MdOutlineHistory />
          History
        </div>
        <hr
          className={`${
            theme === "dark" ? "opacity-10" : "opacity-90"
          } my-4 border-solid border-[#f5f5f5]`}
        />
        <div>
          Sign in to like videos, comment, and subscribe.
          <a href="/" style={{ textDecoration: "none" }}>
            <button className="py-1 px-4 bg-transparent border border-solid text-[#3ea6ff] rounded font-medium mt-2.5 cursor-pointer flex items-center gap-1 border-[#3ea6ff]">
              <MdOutlineAccountCircle />
              SIGN IN
            </button>
          </a>
        </div>
        <hr
          className={`${
            theme === "dark" ? "opacity-10" : "opacity-90"
          } my-4 border-solid border-[#f5f5f5]`}
        />{" "}
        <h2 className="text-sm font-medium text-[#aaa] mb-5">
          BEST OF Youtube
        </h2>
        <div className="item">
          <MdLibraryMusic />
          Music
        </div>
        <div className="item">
          <MdOutlineSportsBaseball />
          Sports
        </div>
        <div className="item">
          <MdOutlineSportsEsports />
          Gaming
        </div>
        <div className="item">
          <MdOutlineMovie />
          Movies
        </div>
        <div className="item">
          <MdOutlineArticle />
          News
        </div>
        <div className="item">
          <MdOutlineLiveTv />
          Live
        </div>
        <hr
          className={`${
            theme === "dark" ? "opacity-10" : "opacity-90"
          } my-4 border-solid border-[#f5f5f5]`}
        />{" "}
        <div className="item">
          <MdOutlineSettings />
          Settings
        </div>
        <div className="item">
          <MdOutlineFlag />
          Report
        </div>
        <div className="item">
          <MdOutlineHelpOutline />
          Help
        </div>
        <div
          className="item"
          onClick={() => setTheme(theme === "" ? "dark" : "")}
        >
          <MdOutlineSettingsBrightness />
          {theme === "dark" ? "Light" : "Dark"} Mode
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

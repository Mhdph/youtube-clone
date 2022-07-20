import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type CardProps = {
  type: string;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <div
        className={`${
          props.type ? "flex mb-2.5" : "inline w-96"
        } cursor-pointer gap-2.5`}
      >
        <img
          className={`${props.type ? "h-28" : "h-52"} w-full bg-[#999] flex-1`}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <div className={`${props.type ? "" : "mt-4"} flex gap-3 flex-1`}>
          <img
            className={`${
              props.type ? "hidden" : ""
            } w-9 h-9 rounded-full bg-[#999]`}
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <div>
            <h1
              className={`${
                theme === "dark" ? "text-[#F0F0F0]" : "text-black"
              }  font-normal`}
            >
              Test Video
            </h1>
            <h2 className="text-sm text-[#A2A2A2] mt-2">Lama Dev</h2>
            <div className="text-sm text-[#A2A2A2] mb-8">
              660,908 views • 1 day ago
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;

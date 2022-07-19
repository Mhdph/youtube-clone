import React from "react";
import { Link } from "react-router-dom";

type CardProps = {};

const Card: React.FC<CardProps> = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <div>
        <img
          className=""
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <div>
          <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
          <div>
            <h1 className="text-4 font-normal text-primary-default">
              Test Video
            </h1>
            <h2 className="text-sm text-primary-default my-2">Lama Dev</h2>
            <div className="text-sm text-primary-default">
              660,908 views • 1 day ago
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;

import React from "react";
import {
  MdOutlineReplay,
  MdOutlineTask,
  MdOutlineThumbDownAlt,
  MdOutlineThumbUp,
} from "react-icons/md";
import Card from "../components/Card";
import Comments from "../components/Comments";

type VideoProps = {};

const Video: React.FC<VideoProps> = () => {
  return (
    <div className="flex gap-6">
      <div className="flex-[5]">
        <div>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <h1 className="text-xs font-medium mt-4 mb-2.5 text-primary-default">
          Test Video
        </h1>
        <div className="flex items-center justify-between">
          <span className="text-primary-default">
            7,948,154 views • Jun 22, 2022
          </span>
          <div className="flex gap-4 text-primary-default">
            <div className="flex items-center gap-1 cursor-pointer">
              <MdOutlineThumbUp /> 123
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MdOutlineThumbDownAlt /> Dislike
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MdOutlineReplay /> Share
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MdOutlineTask /> Save
            </div>
          </div>
        </div>
        <hr className="my-4 border border-opacity-50" />
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full"
              src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
            />
            <div className="flex flex-col text-primary-default">
              <span className="font-medium">Lama Dev</span>
              <span className="mt-1 mv04 text-primary-default text-xs">
                200K subscribers
              </span>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </p>
            </div>
          </div>
          <button className="bg-[#cc1a00] font-medium text-white border-none rounded max-h-max cursor-pointer py-2.5 px-4">
            SUBSCRIBE
          </button>
        </div>
        <hr className="my-4 border border-opacity-50" />
        <Comments />
      </div>
      <div className="flex-[2]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Video;

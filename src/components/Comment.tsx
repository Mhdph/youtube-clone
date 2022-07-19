import React from "react";

type CommentProps = {};

const Comment: React.FC<CommentProps> = () => {
  return (
    <div className="flex gap-2.5 my-7">
      <img
        className="w-12 h-12 rounded-full"
        src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
      />
      <div className="flex flex-col gap-2.5 text-primary-default">
        <span className="text-sm font-medium">
          John Doe{" "}
          <span className="text-xs font-normal text-primary-default ml-1">
            1 day ago
          </span>
        </span>
        <span className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </span>
      </div>
    </div>
  );
};
export default Comment;

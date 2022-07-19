import React from "react";
import Comment from "./Comment";
type CommentsProps = {};

const Comments: React.FC<CommentsProps> = () => {
  return (
    <div>
      <div className="fkex items-center gap-2.5">
        <img
          className="w-12 h-12 rounded-full"
          src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
        />
        <input
          className="border-none border-b border solid text-primary-default bg-transparent outline-none p-1 w-full "
          placeholder="Add a comment..."
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;

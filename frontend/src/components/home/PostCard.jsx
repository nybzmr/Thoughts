import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";

const PostCard = ({ name, time, likes, postContent, comments, imageUrl }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <Avatar />
        <div className="ml-4">
          <p className="text-sm font-bold text-gray-700">{name}</p>
          <p className="text-xs text-gray-800" style={{ color: "black",fontWeight: "300" ,textAlign: "left" }}>{time} sec ago</p>
        </div>
      </div>
      <p className="text-sm text-black mb-4" style={{ color: "black",fontWeight: "400" ,textAlign: "left" }}>{postContent}</p>


      {imageUrl && <img src={imageUrl} alt="Post content" className="w-full rounded-lg mb-4" />}
      <div className="mt-5 flex gap-7 justify-start">
        <button className="flex gap-1 items-center space-x-1 text-sm text-gray-700 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {likes}
        </button>
        <button className="flex gap-2 items-center space-x-1 text-sm text-gray-700 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {comments}
        </button>
        <button className="flex gap-2 items-center space-x-1 text-sm text-gray-700 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          Send
        </button>
      </div>
      <div className="flex mt-4">
        <Avatar />
        <textarea
          className="ml-3 block w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Leave a comment"
        ></textarea>
      </div>
    </Card>
  );
};

export default PostCard;

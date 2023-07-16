import React, { useState } from "react";
import "./Blog.css";

const SingleBlogPage = ({ blog }) => {
  const { id, img, title, details } = blog;

  const [blogs, setBlogs] = useState(false);

  const handleOnClick = (id) => {
    setBlogs(id);
  };

  return (
    <div className=" blogPost p-4">
      <div>
        <img
          src={img}
          alt="Mind Works Blog Section"
          className="border rounded-lg"
        />
      </div>
      <div className="">
        <h1 className="text-[25px] font-bold mt-[25px] mb-[25px]">{title}</h1>
        <div onClick={() => handleOnClick(id)}>
          {blogs ? <p>{details}</p> : <p>{details.slice(0, 150)}...</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

import React from "react";
import blogs from "../../data/blogs";
import SingleBlogPage from "./SingleBlogPage";

const Blog = () => {
 
  return (
    <div className="container mx-auto mt-[50px] mb-[50px]">
      <h1 className=" text-[35px] lg:text-[50px] text-center font-bold text-[#002060]">
        Latest Blog Post
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] mt-[50px]">
        {blogs?.map((blog) => (
          <SingleBlogPage key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

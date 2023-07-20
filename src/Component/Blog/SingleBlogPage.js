import React, { useState } from "react";
import "./Blog.css";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  // console.log(blog);

  const blogData = useLoaderData()

  // console.log(blogData?.img);

  return (
    <div className="blogPost p-4 mt-[50px] mb-[50px]">
      <img src={blogData?.img} alt="Mind Works Blog Section" className="border rounded-lg blogSingleImage lg:w-[800px] block mx-auto"/>
      <div className="text-center">
        <h2 className="text-[35px] mt-[10px] mb-[10px] font-bold">{blogData?.title}</h2>
        <p className="lg:w-[1000px] block mx-auto">{blogData?.details}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;

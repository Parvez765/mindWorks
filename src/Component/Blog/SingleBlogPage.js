import React, { useState } from "react";
import "./Blog.css";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const SingleBlogPage = (props) => {
  
  
 

 
  return (
    <div className=" blogPost p-4">
      {/* <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.img}
          alt="Mind Works Blog Section"
          className="border rounded-lg"
        />
      </Link> */}
    </div>
  );
};

export default SingleBlogPage;

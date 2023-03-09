import React from 'react';
import BlogCard from './BlogCard';
import Pagination from "react-bootstrap/Pagination";

const Blogs = ({props}) => {
  const numOfBlogsPerPage = 5;
  
  return (
    <>
      {props?.map((blog) => {
        return (
            <BlogCard blog={blog} />
        ); 
      })}
    </>

  );
}

export default Blogs;
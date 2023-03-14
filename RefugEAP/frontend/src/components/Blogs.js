import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { useFetch } from "./useFetch";

const Blogs = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (loading) return;
    setBlogs(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  return (
    <>
      {blogs?.map((blog) => {
        return <BlogCard blog={blog} />;
      })}
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </>
  );
};

export default Blogs;

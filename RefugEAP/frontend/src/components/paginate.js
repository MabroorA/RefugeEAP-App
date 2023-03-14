const paginate = (blogs) => {
  const itemsPerPage = 5;
  const pages = Math.ceil(blogs.length / itemsPerPage);
  const newBlogs = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return blogs.slice(start, start + itemsPerPage);
  });

  return newBlogs;
};

export default paginate;

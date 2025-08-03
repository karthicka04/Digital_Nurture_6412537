import React from "react";

const BlogDetails = () => {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      desc: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      desc: "You can install React from npm."
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;

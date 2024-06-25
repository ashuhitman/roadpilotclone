import React from "react";
import "./Blog.css";
import CenterDiv from "../CenterDiv/CenterDiv";
import BlogCard from "../BlogCard/BlogCard";

function Blog({ blogData }) {
  return (
    <section className="blog-area container">
      <div className="blog-head center">
        <CenterDiv
          title="Latest News"
          spantext="Blog"
          para="Trucking is the tip of the tail when it comes to global trade, while logistics is the tail. From an Indian viewpoint, trucking activities may be viewed as the backbone of trade and economic growth."
        />
      </div>

      <div className="blog-content mt">
        {blogData.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blog;

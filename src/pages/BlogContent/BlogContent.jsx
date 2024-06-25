import React from "react";
import "./BlogContent.css";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import { FaCalendar, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { blogData } from "../../data/blogData";

function BlogContent() {
  const location = useLocation();
  const blog = location.state || {};
  const text = blog.content.text.split("<br/>");
  console.log(blog);
  const goToBlog = () => {};

  return (
    <PageLayout title={blog.content.title}>
      <div className="blog-box container">
        <div className="left">
          <div className="left-head">
            <img src={blog.content.img} />
            <p>
              <span className="icon">
                <FaCalendar />
              </span>
              {blog.content.createdAt}
            </p>
          </div>
          <div className="left-body">
            <h3 style={{ fontSize: "1.8rem" }}>{blog.content.title}</h3>
            {text.map((p, index) => (
              <>
                <p key={index}>{p}</p>
                <br />
              </>
            ))}
          </div>
          <div className="left-foot">
            <b>Share this</b>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="right">
          <h3>Latests</h3>

          {blogData.map((item, index) => (
            <div key={item.id} className="list">
              <figure className="right-img">
                <button onClick={goToBlog}>
                  <img src={item.content.img} />
                </button>
              </figure>
              <div className="right-text">
                <h3>{item.content.title}</h3>
                <p>{item.content.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogContent;

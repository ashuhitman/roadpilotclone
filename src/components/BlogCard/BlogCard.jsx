import React from "react";
import "./BlogCard.css";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { strToUrlString } from "../../utils/passableString";
import { ellipsedStr } from "../../utils/ellipsedStr";

function BlogCard({ blog }) {
  // get url passable string
  const title = strToUrlString(blog.content.title);
  const ellipsedString = ellipsedStr(blog.content.title);
  const navigate = useNavigate();
  const gotoBlogPage = () => {
    navigate(`/blog/${title}/${blog.id}`, { state: blog });
  };

  return (
    <div className="blog-item">
      <div className="blog-item__img">
        <img src={blog.content.img} onClick={gotoBlogPage} />
      </div>

      <div className="blog-item__content">
        <ul>
          <li>
            <span className="list-calendar__icon">
              <FaCalendarAlt />
            </span>
            {blog.content.createdAt}
          </li>
        </ul>
        <h4 className="blog-item__title">{ellipsedString}</h4>

        <button onClick={gotoBlogPage}>
          Read More{" "}
          <span style={{ marginLeft: "6px" }}>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BlogCard;

import React, { useState } from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./blogpost.css";

import blogPosts from "./blogData";
import BlogPostViewer from "./BlogPostViewer";

function BlogPost() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <BaseComponent className="home-blogpost">
      <h2 style={heading}>Blog Posts</h2>

      <div style={grid}>
        {blogPosts.map((post) => (
          <div key={post.id} style={card}>
            <div style={topArea}>
              <h1 style={emoji}>{post.subtitle}</h1>

              <button
                style={openBtn}
                onClick={() => setSelectedPost(post)}
              >
                ↗
              </button>
            </div>

            <div>
              <h3 style={title}>{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <BlogPostViewer
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </BaseComponent>
  );
}

export default BlogPost;

const heading = {
  fontSize: "2.3rem",
  textAlign: "center",
  color: "#fff",
  margin: "-40px 0 40px 0",

};

const grid = {
  display: "flex",
  // gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "24px",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};

const card = {
  background: "#111827",
  borderRadius: "24px",

  padding: "24px",

  height: "220px",
  width: "430px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  border: "1px solid #a4c118ff",

  transition: "0.3s ease",
};

const topArea = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const emoji = {
  fontSize: "2.1rem",
};

const openBtn = {
  width: "42px",
  height: "42px",

  borderRadius: "50%",
  border: "none",

  cursor: "pointer",

  fontSize: "1rem",

  background: "#f4c20d",
};

const title = {
  color: "#fff",
  fontSize: "1.1rem",
  lineHeight: 1.5,
};
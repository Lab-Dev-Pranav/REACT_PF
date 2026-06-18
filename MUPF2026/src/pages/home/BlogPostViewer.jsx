import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function BlogPostViewer({ post, onClose }) {
      // Prevent scrolling on the body when modal is open
      useEffect(() => {
            if (post) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "auto";
            }
            return () => {
                  document.body.style.overflow = "auto";
            };
      }, [post]);

      if (!post) return null;

      const modalContent = (
            <div style={overlayStyle}>
                  <button style={closeBtn} onClick={onClose}>
                        ✕
                  </button>

                  <div style={contentStyle}>
                        <div style={headerStyle}>
                              <h1>{post.title}</h1>

                              <p style={dateStyle}>
                                    <u>{post.date}</u>
                              </p>
                        </div>

                        <div
                              style={bodyStyle}
                              dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                  </div>
            </div>
      );

      return createPortal(modalContent, document.body);
}

export default BlogPostViewer;

const overlayStyle = {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100vh",

      background: "rgba(24, 142, 197, 0)",

      zIndex: 9999,

      overflowY: "auto",

      display: "flex",
      justifyContent: "center",
};

const contentStyle = {
  width: "80%",
  maxWidth: "900px",
  padding: "80px 20px",

  color: "#e9962aba",

  // Glassmorphism
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)", // Safari support

  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: "20px",

  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.42)",

  // Optional subtle glow
  // boxShadow: "0 8px 32px rgba(99, 197, 24, 0.25)",
};

const headerStyle = {
      marginBottom: "40px",
};

const dateStyle = {
      color: "#999",
      fontSize: "1.25rem",
};

const bodyStyle = {
      lineHeight: 1.8,
      fontSize: "1.2rem",
};

const closeBtn = {
      position: "fixed",
      top: "20px",
      right: "20px",

      width: "45px",
      height: "45px",

      border: "none",
      borderRadius: "50%",

      cursor: "pointer",

      fontSize: "1rem",

      background: "#f4c20d",
      zIndex: 10000,
};
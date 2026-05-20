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

      background: "#001d88ff",

      zIndex: 9999,

      overflowY: "auto",

      display: "flex",
      justifyContent: "center",
};

const contentStyle = {
      width: "90%",
      maxWidth: "900px",

      padding: "80px 20px",

      color: "#fff",
};

const headerStyle = {
      marginBottom: "40px",
};

const dateStyle = {
      color: "#999",
};

const bodyStyle = {
      lineHeight: 1.8,
      fontSize: "1rem",
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
};
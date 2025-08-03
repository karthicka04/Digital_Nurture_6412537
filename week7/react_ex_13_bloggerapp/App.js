import React, { useState } from "react";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";

function App() {
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div className="App" style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      {/* Conditional Rendering - Using AND (&&) */}
      {showCourse && <CourseDetails />}

      {/* Conditional Rendering - Using Ternary Operator */}
      {showBook ? <BookDetails /> : <p>Books not available</p>}

      {/* Conditional Rendering - Using IIFE */}
      {(() => {
        if (showBlog) {
          return <BlogDetails />;
        } else {
          return <p>No blogs available</p>;
        }
      })()}
    </div>
  );
}

export default App;

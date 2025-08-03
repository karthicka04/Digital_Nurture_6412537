import React from "react";

const CourseDetails = () => {
  const courses = [
    { title: "Angular", date: "4/5/2021" },
    { title: "React", date: "6/3/2020" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.title}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;

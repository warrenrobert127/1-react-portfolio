import React from "react";

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <a href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-messaging--messaging-webapp">
        {" "}
        <img
          src={require("../../assets/large/resume.jpg").default}
          alt="resume"
          style={{ width: "70%" }}
        />
      </a>
    </div>
  );
}

export default Resume;

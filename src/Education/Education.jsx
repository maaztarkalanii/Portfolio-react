import React from "react";
import "./Education.css";

// Sample images (you can replace these URLs with actual images)
const images = {
  highSchool: "https://via.placeholder.com/600x400?text=High+School",
  university: "https://via.placeholder.com/600x400?text=University",
  internship: "https://via.placeholder.com/600x400?text=Internship",
  job: "https://via.placeholder.com/600x400?text=Job+1",
};

const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          <div className="timeline-row">
            <div className="timeline-item">
              <img
                src="../public/assets/images/school.png"
                alt="High School"
                className="timeline-image"
              />
              <div className="timeline-content">
                <div className="timeline-date">2021</div>
                <h3>High School</h3>
                <p>
                  I completed my schooling in 2021 from Government High School
                  Sirsinai Kabal and Secure.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="../public/assets/images/college.png"
                alt="University"
                className="timeline-image"
              />
              <div className="timeline-content">
                <div className="timeline-date">2022</div>
                <h3>University</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  alias, eveniet accusamus adipisci reiciendis voluptatem.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-item">
              <img
                src="../public/assets/images/uni.png"
                alt="Internship"
                className="timeline-image"
              />
              <div className="timeline-content">
                <div className="timeline-date">2023</div>
                <h3>Internship</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  reiciendis voluptatem.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <img
                src="../public/assets/images/college.png"
                alt="Job 1"
                className="timeline-image"
              />
              <div className="timeline-content">
                <div className="timeline-date">2021</div>
                <h3>Job 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  reiciendis voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

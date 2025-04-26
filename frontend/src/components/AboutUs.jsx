import React from "react";
import "../App.css";

const developers = [
  {
    name: "Vanshi Mittal",
    role: "Frontend Developer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U05237E25NH-7e1394678b99-192"
  },
  {
    name: "Karan Raju Siruvuri",
    role: "Frontend Developer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U051ZHG4DSA-36fc2548a737-512"
  },
  {
    name: "Anjali Baldia",
    role: "FrontEnd Engineer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U05265RS7PC-e8a2cec9b339-512"
  },
  {
    name: "Roshan Jangid",
    role: "Backend Developer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U052623UZ99-9ae2f6f6f301-192"
  },
  {
    name: "Saurabh Pandey",
    role: "Backend Developer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U0528KPNGJ0-g0b37ffab429-192"
  },
  {
    name: "Swagnik Choudhury",
    role: "DevOps Engineer",
    avatar: "https://ca.slack-edge.com/E8RLKB40H-U0328R8AUJY-a1dee6548128-192"
  }
];

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">Meet the Team</h1>
      <p className="aboutus-desc">We are a passionate team of 6 developers building the future of news with KhabriBaba. Our mission is to deliver accurate, timely, and engaging news experiences for everyone.</p>
      <div className="aboutus-grid">
        {developers.map(dev => (
          <div className="aboutus-card" key={dev.name}>
            <img src={dev.avatar} alt={dev.name} className="aboutus-avatar" />
            <h3>{dev.name}</h3>
            <span className="aboutus-role">{dev.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

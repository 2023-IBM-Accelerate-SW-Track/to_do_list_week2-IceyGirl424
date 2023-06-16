import React, { Component } from "react";
import "./About.css";
import zhongliii from "../assets/zhongliii.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={zhongliii}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Lena Munad</div>
            <div className="brief_description">
            Hello! My name is Lena Munad, and I'm a Computer Science at Las Positas College. I am a passionate software developer! I love to read, write, draw, paint, and cook during my free time. I play volleyball and I'm on my college team. And, I would love to meet and work with you all!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

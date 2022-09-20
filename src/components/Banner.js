import React from "react";
import Timer from "../assets/Timer.png";
import Button from "./Button";

const Banner = () => {
  

  return (
    <section className="Banner">
      <div className="BannerContent">
        <div className="BannerTextContent">
          <div>
            <h5>Learning is Fun</h5>
          </div>
          <h1>Learn New Skill Online</h1>
          <h1>Find Best Courses</h1>

          <div>
           <Button name="Register"/>

           <Button name="Login"/>
          </div>
        </div>
      </div>
      <div className="BannerImg">
        <img src={Timer} alt="timer" />
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <section className="Newsletter">
      <div className="NewsletterContent">
        <div className="NewsletterTextContent">
          <div>
            <h5>Subscribe Now</h5>
             </div>
          <h1>Be In The Know...</h1>
        
          <div>
          <Button name="Register"/>

           
          </div>
        </div>
       
      </div>
     
    </section>
  );
};

export default NewsLetter;

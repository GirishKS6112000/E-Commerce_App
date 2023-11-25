import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="desciptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consectetur nobis ut reprehenderit ex recusandae odit quaerat et
          consequatur! Aut totam neque pariatur dolore reprehenderit inventore
          possimus perferendis sunt dolor!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          sapiente velit iure atque dolorem repellendus iste distinctio
          perferendis at accusantium obcaecati eos numquam, blanditiis sunt
          beatae vitae quam ipsa eligendi.
        </p>
      </div>
    </div>
  );
}

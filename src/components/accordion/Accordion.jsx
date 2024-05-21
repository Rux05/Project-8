import React, { useState } from "react";
import accordionArrow from "./../../assets/accordion/arrow_back.png";
import "./accordion.scss";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <div className="accordion-title-content">
        <div className="accordion-title">
          <div>{title}</div>
          <div>
            <img
              src={accordionArrow}
              alt="Accordion arrow"
              onClick={toggle}
              className={open ? "accordion-arrow open" : "accordion-arrow"}
            />
          </div>
        </div>
        {open && (
          <div className="accordion-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

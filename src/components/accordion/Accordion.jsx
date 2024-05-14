import React, { useState } from "react";
import "./accordion.scss";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  // const accordionData = [
  //   {
  //     title: "Fiabilité",
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //         laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //         suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //         voluptatem.`,
  //   },
  //   {
  //     title: "Respect",
  //     content: `content2`,
  //   },
  //   {
  //     title: "Service",
  //     content: `content3`,
  //   },
  //   {
  //     title: "Sécurité",
  //     content: `content4`,
  //   },
  // ];
  // const { title, content } = accordionData;
  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggle}>
            <div>{title}</div>
            <div>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          {open && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
}

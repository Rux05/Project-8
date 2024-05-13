import React from "react";
import "./accordion.scss";

export default function Accordion() {
  const accordionData = [
    {
      title: "Fiabilité",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
      title: "Respect",
      content: `content2`,
    },
    {
      title: "Service",
      content: `content3`,
    },
    {
      title: "Sécurité",
      content: `content4`,
    },
  ];
  const { title, content } = accordionData;
  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            <div>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

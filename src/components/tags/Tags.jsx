import React from "react";
import "./tags.scss";

export default function Tags({ tags }) {
  return (
    <div>
      <ul className="tags-list">
        {tags.map((tag, index) => (
          <li key={`tag-${index}`} className="tag-item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import "./body.scss";

export default function Body() {
  return (
    <div className="body-container">
      <h2>Welcome to our website!</h2>
      <p>This is the main content of our page.</p>
      <img src="./example.jpg" alt="Example" />
      {/* Alte elemente sau componente pot fi adăugate aici */}
    </div>
  );
}

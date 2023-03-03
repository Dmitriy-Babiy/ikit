import React from "react";
import "./Button.scss";

export default function Button({ title, fun, mt=0 }) {
  return (
    <div style={{marginTop: `${mt}px`}} className="ui-btn-wrapper">
      <button onClick={fun}>{title}</button>
    </div>
  );
}

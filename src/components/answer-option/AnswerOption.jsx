import React, { useState } from "react";
import "./AnswerOption.scss";
export default function AnswerOption({ text, index, onClickVariant, mt = 0 }) {
  return (
    <div style={{ marginTop: `${mt}px` }} className="answer-option">
      <li onClick={() => onClickVariant(index)} key={index}>
        {text}
      </li>
    </div>
  );
}

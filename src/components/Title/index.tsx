import React from "react";
import "./styles.scss";

interface ITitleParams {
  text: string;
}

const Title: React.FC<ITitleParams> = ({ text }) => (
  <h2 className="title">{text}</h2>
);

export default Title;

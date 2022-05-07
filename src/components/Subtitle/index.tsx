import React from "react";
import "./styles.scss";

interface ISubtitleParams {
  text: string;
}

const Subtitle: React.FC<ISubtitleParams> = ({ text }) => (
  <h3 className="subtitle">{text}</h3>
);

export default Subtitle;

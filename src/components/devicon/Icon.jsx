import { useState } from "react";

const Icon = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <i
      className={`devicon-${props.name}-plain ${isHover ? "colored" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    ></i>
  );
};

export default Icon;

import React from "react";

const IconSvg = ({
  width = "1.5em",
  height = "1.5em",
  isOpen,
  color = "#5484b3",
}) => {
  return (
    <svg
      style={{
        width,
        height,
      }}
      viewBox="0 0 1300 950"
    >
      <path
        d="M1000 170.666667v105.333333h128v512h-108v105.333333h213.333333V170.666667M170.666667 200.666667v682.666666h213.333333v-105.333333H276V276h128V170.666667H170.666667z"
        fill={color}
      />
      <text
        x={isOpen ? "520" : "450"}
        y="755"
        fontSize="800"
        fontWeight="700"
        fill={color}
      >
        {isOpen ? "-" : "+"}
      </text>
    </svg>
  );
};

export default IconSvg;

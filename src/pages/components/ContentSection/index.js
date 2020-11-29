import React from "react";
import clsx from "clsx";

const ContentSection = ({
  children,
  sectionStyle,
  boxStyle,
  childrenWrapperStyle,
}) => (
  <section className={sectionStyle}>
    <div className={clsx("container", boxStyle)}>
      <div className={clsx("row", childrenWrapperStyle)}>{children}</div>
    </div>
  </section>
);

export default React.memo(ContentSection);

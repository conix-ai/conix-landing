import clsx from "clsx";
import React from "react";

export type SectionTitleProps = {
  title?: string;
  className?: string;
  children?: JSX.Element;
};
const SectionTitle = ({ title, className, children }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <div className="flex gap-4">
        <span className="w-2 bg-primary"></span>
        {children || <h1 className={clsx("font-serif", className)}>{title}</h1>}
      </div>
    </div>
  );
};

export default SectionTitle;

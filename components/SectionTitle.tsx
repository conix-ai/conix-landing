import clsx from "clsx";
import React from "react";

export type SectionTitleProps = {
  title: string;
  className?: string;
};
const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <div className="flex gap-4">
        <span className="w-2 bg-primary"></span>
        <h1 className={clsx("font-serif", className)}>{title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;

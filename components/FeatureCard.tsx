import clsx from "clsx";
import React from "react";

export type FeatureCardProps = {
  color: string;
  image: string;
  title: string;
  description: string;
};
const FeatureCard = ({
  color,
  image,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className={clsx("text-center", color)}>
      <div className="px-8 py-12 flex flex-col gap-4 items-center">
        <img src={image} alt="" />
        <h2 className="whitespace-pre-wrap">{title}</h2>
        <p className="whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { createContext, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const initialContext: any = {};
const SliderProvider = createContext(initialContext);

export type SliderProps = {
  children: JSX.Element;
};
const Slider = ({ options, children }: any) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  return (
    <SliderProvider.Provider
      value={{ options, currentSlideIdx, setCurrentSlideIdx }}
    >
      <div>{children}</div>
    </SliderProvider.Provider>
  );
};

export type SlideProps = {
  children: JSX.Element;
  idx: number;
};
const Slide = ({ children, idx }: SlideProps) => {
  const { currentSlideIdx } = React.useContext(SliderProvider);

  return (
    <div className={clsx(currentSlideIdx !== idx && "hidden")}>{children}</div>
  );
};

const Controls = () => {
  const { options, currentSlideIdx, setCurrentSlideIdx } =
    React.useContext(SliderProvider);

  const prevDisabled = currentSlideIdx === 0;
  const nextDisabled = currentSlideIdx >= options.length - 1;

  const onPrev = () => {
    if (!prevDisabled) setCurrentSlideIdx(currentSlideIdx - 1);
  };
  const onNext = () => {
    if (!nextDisabled) setCurrentSlideIdx(currentSlideIdx + 1);
  };

  return (
    <div className="controls flex gap-4">
      <button
        className={clsx("prev bg-transparent", prevDisabled && "opacity-50")}
        onClick={onPrev}
        disabled={prevDisabled}
      >
        <HiChevronLeft className="text-2xl"></HiChevronLeft>
      </button>
      <button
        className={clsx("next bg-transparent", nextDisabled && "opacity-50")}
        onClick={onNext}
        disabled={nextDisabled}
      >
        <HiChevronRight className="text-2xl"></HiChevronRight>
      </button>
    </div>
  );
};

Slider.Slide = Slide;
Slider.Controls = Controls;
export default Slider;

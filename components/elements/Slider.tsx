import clsx from "clsx";
import React, { createContext, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const initialContext: any = {};
const SliderProvider = createContext(initialContext);

const Slider = ({ options, children }: any) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <SliderProvider.Provider value={{ options, currentIdx, setCurrentIdx }}>
      <div>{children}</div>
    </SliderProvider.Provider>
  );
};

const Preview = () => {
  const { options, currentIdx } = React.useContext(SliderProvider);

  return (
    <img
      className="w-full h-72 object-cover object-center"
      src={options[currentIdx].preview}
      alt=""
    />
  );
};

const Dots = ({ children }: any) => {
  const { options } = React.useContext(SliderProvider);

  return (
    <div className="dots">
      {children || (
        <>
          {options.map((img: any, idx: number) => (
            <Dot key={idx} idx={idx}></Dot>
          ))}
        </>
      )}
    </div>
  );
};
const Dot = ({ children, idx }: any) => {
  const { currentIdx, setCurrentIdx } = React.useContext(SliderProvider);

  const onClick = () => {
    setCurrentIdx(idx);
  };

  return (
    <div onClick={onClick}>
      {children && children(currentIdx === idx, currentIdx)}
    </div>
  );
};

const Controls = () => {
  const { options, currentIdx, setCurrentIdx } =
    React.useContext(SliderProvider);

  const prevDisabled = currentIdx === 0;
  const nextDisabled = currentIdx >= options.length - 1;

  const onPrev = () => {
    if (!prevDisabled) setCurrentIdx(currentIdx - 1);
  };
  const onNext = () => {
    if (!nextDisabled) setCurrentIdx(currentIdx + 1);
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

Slider.Preview = Preview;
Slider.Dots = Dots;
Slider.Dot = Dot;
Slider.Controls = Controls;
export default Slider;

import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type AccordionProps = {
  title: string;
  children: JSX.Element;
};

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center gap-4 w-full py-4 bg-transparent border-b">
              <h3>{title}</h3>
              {open && <HiMinus />}
              {!open && <HiPlus />}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition origin-top duration-100"
              enterFrom="transform scale-y-0 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition origin-top duration-100"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-0 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm transition-all">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Accordion;

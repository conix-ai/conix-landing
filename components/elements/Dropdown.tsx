import { NavbarItemProps } from "@/interfaces/Navbar";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";

type DropdownProps = {
  Trigger: (triggerProps: any) => JSX.Element;
  options: NavbarItemProps[];
  onClick?: (e: any) => void;
  children: (option: NavbarItemProps, active: boolean) => JSX.Element;
};

const Dropdown = ({ Trigger, options, children, onClick }: DropdownProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = (e: any) => {
    setIsMenuOpen(!isMenuOpen);
    onClick && onClick(e);
  };

  const onTriggerClick = toggleMenuOpen;
  const onTriggerBlur = () => {
    if (window.innerWidth > 425) toggleMenuOpen(false);
  };

  return (
    <div className="dropdown">
      <Menu>
        <button
          className="btn btn-sm bg-transparent"
          onClick={onTriggerClick}
          onBlur={onTriggerBlur}
        >
          <Trigger isOpen={isMenuOpen} />
        </button>

        <Transition
          show={isMenuOpen}
          enter="transition transform origin-top"
          enterFrom="scale-y-0 opacity-0"
          enterTo="scale-y-100 opacity-1"
          leave="transition transform origin-top"
          leaveFrom="scale-y-100 opacity-1"
          leaveTo="scale-y-0 opacity-0"
        >
          <Menu.Items className={clsx("menu", !isMenuOpen && "closed")}>
            {options.map((option, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => children(option, isMenuOpen)}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;

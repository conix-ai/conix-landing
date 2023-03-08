import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./elements/Dropdown";
import { HiChevronDown, HiChevronUp, HiMenuAlt4 } from "react-icons/hi";

type TriggerProps = {
  name: string;
  isOpen: boolean;
};
const Trigger = ({ name, isOpen }: TriggerProps) => {
  return (
    <div className="flex items-center justify-between gap-2 text-white">
      <p>{name}</p>

      {isOpen && <HiChevronUp className="w-4 h-4" />}
      {!isOpen && <HiChevronDown className="w-4 h-4" />}
    </div>
  );
};

export type NavbarItemProps = {
  name: string;
  link: string;
  isChild?: boolean;
  options?: NavbarItemProps[];
};
const NavbarItem = ({ name, link, isChild, options }: NavbarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (event: any) => {
    if (options) {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {!options && (
        <Link className="flex p-4 text-start text-white" href={link}>
          {/* item */}
          <div className="flex gap-2 items-center justify-between">
            <p>{name}</p>
          </div>
        </Link>
      )}
      {options && (
        <Dropdown
          Trigger={() => <Trigger name={name} isOpen={isOpen} />}
          onClick={onClick}
          options={options}
        >
          {(option: NavbarItemProps) => <NavbarItem {...option} isChild />}
        </Dropdown>
      )}
    </>
  );
};

export type NavbarProps = {};
const Navbar = (props: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar bg-black text-white sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex gap-12 justify-between items-center p-4 relative">
          <div className="logo">logo</div>

          <div
            className="toggle justify-end flex lg:hidden"
            onClick={toggleMenu}
          >
            <HiMenuAlt4 className="icon" />
          </div>

          <div
            className={clsx(
              "absolute top-14 left-0 w-full bg-black max-h-[90vh] overflow-auto",
              "lg:static lg:max-h-none lg:overflow-visible",
              !showMenu ? "hidden lg:block" : ""
            )}
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-start gap-2 lg:flex lg:flex-row lg:items-center lg:justify-between">
                <div className="navbar flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-12 w-full lg:w-auto">
                  <NavbarItem
                    name="Company"
                    link="#"
                    options={[
                      {
                        name: "Our Team",
                        link: "/team",
                      },
                      {
                        name: "Our Story",
                        link: "/story",
                      },
                      {
                        name: "Contact US",
                        link: "/contact",
                      },
                      {
                        name: "Events",
                        link: "/events",
                      },
                      {
                        name: "Careers",
                        link: "/careers",
                      },
                    ]}
                  ></NavbarItem>
                  <NavbarItem
                    name="How it works"
                    link="#"
                    options={[
                      {
                        name: "for architects",
                        link: "/for-architects",
                      },
                      {
                        name: "for real estate developers",
                        link: "/for-real-estate-developers",
                      },
                      {
                        name: "FAQ",
                        link: "/faqs",
                      },
                      {
                        name: "Features",
                        link: "/features",
                      },
                    ]}
                  ></NavbarItem>
                  <NavbarItem name="Pricing" link="#"></NavbarItem>
                </div>
                <div className="actions flex flex-wrap items-center gap-4 p-4">
                  <Link className="text-white" href="/login">
                    Login
                  </Link>
                  <button className="btn btn-sm btn-primary">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export type NavbarItemProps = {
  name: string;
  link: string;
  isChild?: boolean;
  children?: NavbarItemProps[];
};

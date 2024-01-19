import { NavLink } from "react-router-dom";
import {
  NavContainerProps,
  NavItemProps,
  NavItemLinkProps,
  NavMenuProps
} from "../../api/_interfaces.ts";

// The wrapper for the main nav.
export const NavContainer = ({ children }: NavContainerProps): JSX.Element => {
  return <nav className="nav flex justify-start py-4">{children}</nav>;
};

// The main nav <ul>.
export const NavMenu = ({ children }: NavMenuProps): JSX.Element => {
  return <ul className="nav__menu">{children}</ul>;
};

// Nav <li> items.
export const NavItem = ({ children }: NavItemProps): JSX.Element => {
  return <li className="nav__item inline-block me-4 my-2">{children}</li>;
};

// Nav <a> links.  This is a React Router <NavLink> component with a 'to' prop.
export const NavItemLink = ({ title, to }: NavItemLinkProps): JSX.Element => {
  return (
    <NavLink
      to={to}
      className={`nav__link px-4 py-3 font-semibold text-gray-700 bg-gray-100 rounded-lg transition duration-200 ease hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-orange-400 [&.active]:bg-gray-700 [&.active]:text-white`}
    >
      <span>{title}</span>
    </NavLink>
  );
};

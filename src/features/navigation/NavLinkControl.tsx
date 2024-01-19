import { NavLink } from "react-router-dom";
import { NavLinkControlProps } from "../../api/_interfaces.ts";

export default function NavLinkControl({
  classes,
  children,
  hasIcon,
  iconPosition,
  id,
  textContent,
  type,
  to
}: NavLinkControlProps): JSX.Element {
  const primaryClasses = `text-orange-600 bg-orange-100 hover:bg-gray-700 hover:text-white`;
  const secondaryClasses = `text-gray-800 bg-gray-100 hover:bg-gray-200`;
  const defaultClasses = `text-gray-800 bg-white border border-gray-200 hover:border hover:border-gray-400`;

  return (
    <NavLink
      className={`inline-block group pe-3 ps-4 py-2 rounded-lg font-semibold ${
        type === "primary"
          ? primaryClasses
          : type === "secondary"
          ? secondaryClasses
          : defaultClasses
      } ${classes ? classes : ""}`}
      data-type={type}
      id={id}
      to={to}
    >
      {hasIcon && iconPosition === "left" && children}
      <span
        className={`inline-block relative ${
          hasIcon && iconPosition === "left"
            ? "ms-1.5"
            : hasIcon && iconPosition === "right"
            ? "me-1.5"
            : ""
        }`}
      >
        {textContent}
      </span>
      {hasIcon && iconPosition === "right" && children}
    </NavLink>
  );
}

import { NavLink } from "react-router-dom";

interface FormButtonProps {
  extraClasses?: string;
  id?: string;
  onClick?: any;
  textContent: string;
  to?: string;
  type: string;
}

export default function FormButton({
  extraClasses,
  id,
  onClick,
  textContent,
  to,
  type
}: FormButtonProps): JSX.Element {
  if (type == "submit") {
    return (
      <button
        className={`group inline-block px-4 py-2 rounded-lg font-semibold text-orange-600 bg-orange-100 hover:bg-gray-700 hover:text-white ${
          extraClasses ? extraClasses : ""
        }`}
        id={id ? id : ""}
        name="submit"
        onClick={onClick && onClick}
        type="submit"
      >
        {textContent}
      </button>
    );
  } else if (type === "reset") {
    return (
      <button
        className={`group inline-block px-4 py-2 rounded-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 ${
          extraClasses ? extraClasses : ""
        }`}
        id={id ? id : ""}
        name="reset"
        onClick={onClick && onClick}
        type="reset"
      >
        {textContent}
      </button>
    );
  } else if (type === "cancel") {
    return (
      <NavLink
        className={`group inline-block px-4 py-2 rounded-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 ${
          extraClasses ? extraClasses : ""
        }`}
        id={id ? id : ""}
        onClick={onClick && onClick}
        to={to}
      >
        {textContent}
      </NavLink>
    );
  }
}

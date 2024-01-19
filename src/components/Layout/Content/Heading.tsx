import NavLinkControl from "../../../features/navigation/NavLinkControl.tsx";
import IconAddPerson from "../../Icons/IconAddPerson.tsx";
import IconContainer from "../../Icons/IconContainer.tsx";
import { ContentHeadingProps } from "../../../api/_interfaces.ts";

export default function Heading({ title }: ContentHeadingProps): JSX.Element {
  return (
    <div className="flex align-stretch justify-between mb-4">
      <div className="flex items-center">
        <h3 className="text-2xl font-semibold leading-none">{title}</h3>
      </div>
      <div className="flex items-center">
        <NavLinkControl
          hasIcon
          iconPosition="right"
          id="addNewClient"
          textContent="Add New Client"
          to="add-client"
          type="primary"
        >
          <IconContainer classes="relative top-[2px]">
            <IconAddPerson classes="w-4 h-4" strokeWidth={2.5} />
          </IconContainer>
        </NavLinkControl>
      </div>
    </div>
  );
}

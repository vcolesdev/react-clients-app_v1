import IconLogo from "../Icons/IconLogo.tsx";
import IconContainer from "../Icons/IconContainer.tsx";
import { LogoProps, LogoContainerProps } from "../../api/_interfaces.ts";

const LogoContainer = ({ children, classes }: LogoContainerProps) => {
  return (
    <div className={`logo flex align-middle px-5 me-8 border-r border-r-gray-200 ${classes}`}>
      {children}
    </div>
  );
};

export default function Logo({ text }: LogoProps) {
  return (
    <LogoContainer>
      <IconContainer classes="w-[24px] mt-2 me-1">
        <IconLogo />
      </IconContainer>
      <span className="inilne-block mt-1.5 text-xl font-semibold text-gray-800">{text}</span>
    </LogoContainer>
  );
}

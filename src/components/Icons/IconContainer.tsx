import { ReactChildren } from "../../api/_types.ts";

interface IconContainer {
  children: ReactChildren;
  classes?: string;
}

export default function IconContainer({ children, classes }: IconContainer) {
  return (
    <div className={`icon__container inline-block ${classes ? classes : null}`}>{children}</div>
  );
}

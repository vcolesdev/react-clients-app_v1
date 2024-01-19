import { ContentSubheadingProps } from "../../../api/_interfaces.ts";

export default function Subheading({ classes, title }: ContentSubheadingProps): JSX.Element {
  return <h3 className={`mb-4 font-semibold text-2xl ${classes ? classes : ""}`}>{title}</h3>;
}

import { PageTitleProps } from "../../api/_interfaces.ts";

export default function PageTitle({ text }: PageTitleProps): JSX.Element {
  return <h1 className="text-3xl font-bold text-gray-800 ms-4">{text}</h1>;
}

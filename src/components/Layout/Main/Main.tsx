import { MainProps } from "../../../api/_interfaces.ts";

export default function Main({ children }: MainProps): JSX.Element {
  return <main className="page flex-grow p-10 bg-gray-100">{children}</main>;
}

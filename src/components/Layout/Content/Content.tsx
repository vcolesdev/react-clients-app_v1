import { ContentProps } from "../../../api/_interfaces.ts";

export default function Content({ children }: ContentProps): JSX.Element {
  return (
    <div className="content bg-white p-8 rounded-xl border-b-[3px] border-bg-gray-200">
      {children}
    </div>
  );
}

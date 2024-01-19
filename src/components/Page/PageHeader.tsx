import { PageHeaderProps } from "../../api/_interfaces.ts";

export default function PageHeader({ children }: PageHeaderProps): JSX.Element {
  return <header className="page__header py-8">{children}</header>;
}

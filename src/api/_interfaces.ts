import { ReactChildren } from "./_types.ts";

/* Clients API */

export interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status?: boolean;
  comments?: string;
}

export interface ClientsState {
  clients: IClient[];
  isLoading: boolean;
  error: string | null;
}

/* Client Feature Component  */

export interface ClientDetailProps {
  children: ReactChildren;
}

export interface ClientFullNameProps {
  extraClasses?: string;
  firstName: string;
  lastName: string;
}

export interface ClientEmailProps {
  email: string;
}

export interface ClientStatusProps {
  status: boolean;
}

export interface ClientProps {
  email: string;
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
}

/* Forms */

export interface FormProps {
  action?: string;
  children: ReactChildren;
  id: string;
  name: string;
  onSubmit: any;
}

/* Component Props */

export interface MainProps {
  children: ReactChildren;
}

export interface ContentProps {
  children: ReactChildren;
}

export interface ContentHeadingProps {
  title: string;
}

export interface ContentSubheadingProps {
  classes?: string;
  title: string;
}

export interface PageHeaderProps {
  children: ReactChildren;
}

export interface PageTitleProps {
  text: string;
}

export interface LogoContainerProps {
  children: ReactChildren;
  classes?: string;
}

export interface LogoProps {
  text: string;
}

export interface LayoutProps {
  children: ReactChildren;
}

export interface NavContainerProps {
  children: ReactChildren;
}

export interface NavMenuProps {
  children: ReactChildren;
}

export interface NavItemProps {
  children: ReactChildren;
}

export interface NavItemLinkProps {
  title: string;
  to: string;
}

export interface NavLinkControlProps {
  classes?: string;
  children?: ReactChildren;
  hasIcon?: boolean;
  iconPosition?: string;
  id?: string;
  textContent: string;
  type?: string;
  to: string;
}

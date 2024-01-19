import Logo from "../../components/Logo/Logo.tsx";
import useNav from "../../api/hooks/useNav.ts";
import { NavContainer, NavMenu, NavItem, NavItemLink } from "./NavElements.tsx";

export default function Nav(): JSX.Element {
  const { links } = useNav();

  return (
    <NavContainer>
      <Logo text="Clients App" />
      <NavMenu>
        {links &&
          links.map((link) => (
            <NavItem key={link.title}>
              <NavItemLink title={link.title} to={link.route} />
            </NavItem>
          ))}
      </NavMenu>
    </NavContainer>
  );
}

import Nav from "../../../features/navigation/Nav.tsx";

export default function Header(): JSX.Element {
  return (
    <header className="header bg-white border-b border-b-gray-200">
      <div className="header__content">
        <Nav />
      </div>
    </header>
  );
}

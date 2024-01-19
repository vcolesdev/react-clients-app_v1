import Header from "./Header/Header.tsx";
import Main from "./Main/Main.tsx";
import Footer from "./Footer/Footer.tsx";
import { LayoutProps } from "../../api/_interfaces.ts";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

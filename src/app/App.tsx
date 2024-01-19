import { useEffect } from "react";
import { ReactChildren } from "../api/_types.ts";
import { useLocation } from "react-router-dom";

interface AppProps {
  children: ReactChildren;
  containerClasses: string;
  pageTitle?: string;
}

interface AppContainerProps {
  children: ReactChildren;
  classes?: string;
}

const AppContainer = ({ children, classes }: AppContainerProps) => {
  return <div className={`${classes} relative flex min-h-screen`}>{children}</div>;
};

export default function App({ children, containerClasses, pageTitle }: AppProps): JSX.Element {
  // Get the location object.
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    // Control refresh history
  }, [location]);

  return (
    <AppContainer classes={containerClasses} data-title={pageTitle ? pageTitle : null}>
      {children}
    </AppContainer>
  );
}

export default function useNav() {
  const links = [
    {
      title: "Home",
      route: "/"
    },
    {
      title: "About",
      route: "about"
    },
    {
      title: "Clients",
      route: "clients"
    }
  ];

  return { links };
}

export default function Footer(): JSX.Element {
  const date = new Date().getFullYear();

  return (
    <footer className="footer px-8 bg-gray-800">
      <div className="footer__content py-5">
        <p className="text-gray-400">
          <span className="inline-block text-gray-100 me-1">&copy;</span>
          {date}
          <span className="inline-block px-2 text-gray-600">|</span>
          Made with
          <span className="inline-block text-gray-100 mx-1">&hearts;</span>
          webdev@vcoles.com
        </p>
      </div>
    </footer>
  );
}

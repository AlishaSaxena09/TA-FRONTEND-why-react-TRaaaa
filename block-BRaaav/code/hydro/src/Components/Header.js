function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="#">
            <strong>Hydro</strong>
          </a>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-primary">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

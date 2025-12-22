export function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div>TM</div>
      </div>
      <nav className="navbar-end">
        <div className="dropdown">
          <div className="btn btn-ghost md:hidden" role="button" tabIndex="0">
            BUTTON
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar-end hidden md:flex">
        <ul>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

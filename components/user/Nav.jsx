const Nav = () => {
  return (
      <div>
          <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#3b5998"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"  style={{color:"white"}}>
          Profil Dosen
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"  >
              <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color:"white"}}>
                Identitas
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"white"}}
              >
                Profil Dosen
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#" style={{color:"white"}}>
                    
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{color:"white"}}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={{color:"white"}}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                style={{color:"white"}}
              >
                Riwayat Pendidikan
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                style={{color:"white"}}
              >
                Pelatatihan
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      </div>
    
  );
};

export default Nav;

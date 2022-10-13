import "./NavBar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      {/* Brand/logo */}
      <a className="navbar-brand" href="#">
        <img src="logo.PNG" alt="logo" width={'30px'} />Localtrade
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarList" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarList">
        {/* Left Nav */}
        <ul className="navbar-nav">
          {/* <!-- Dropdown --> */}
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Buy Crypto
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Buy BNB</a>
              <a className="dropdown-item" href="#">Buy BTC</a>
              <a className="dropdown-item" href="#">Buy ETH</a>
            </div>
          </li>
          {/* <!-- Dropdown --> */}
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Finance
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Finance 1</a>
              <a className="dropdown-item" href="#">Finance 2</a>
            </div>

          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Listing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Academy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
        {/* Right Nav */}
        <ul className="navbar-nav">
          <li className="nav-item line-before">
            <a className="nav-link" href="#">ENG</a>
          </li>
          <li className="nav-item line-before">
            <a className="nav-link" href="#"> USD </a>
          </li>
          <li className="nav-item line-before">
            <a className="nav-link" href="#"> SIGN UP </a>
          </li>
          <li className="nav-item">
            <button className="btn primary-btn" type="button">LOG IN</button>
          </li>
        </ul>
      </div>

    </nav >
  )
}
export default Navbar
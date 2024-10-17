import AirbnbLogo from "./assets/airbnb_logo1-removebg-preview.png";

function Header() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <img src={AirbnbLogo} alt="logo" className="airbnb-logo" />
      </nav>
    </div>
  );
}

export default Header;

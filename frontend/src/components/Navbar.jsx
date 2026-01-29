export default function Navbar({ onLogout }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      {/* LEFT - LOGO / NAME */}
      

      {/* CENTER - MENU */}
      <ul className="nav-menu">
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* RIGHT - LOGOUT */}
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

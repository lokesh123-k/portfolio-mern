export default function Navbar({ onLogout }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      

      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>

        {/* ✅ FIXED PROJECTS CLICK */}
        <li onClick={() => scrollToSection("projects")}>Projects</li>

        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

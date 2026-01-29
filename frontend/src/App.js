import { useState } from "react";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Portfolio components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("login");
  const [popup, setPopup] = useState("");

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2000);
  };

  return (
    <>
      {/* POPUP MESSAGE */}
      {popup && <div className="popup">{popup}</div>}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <Login
          onLogin={() => {
            showPopup("Login successful ✅");
            setPage("portfolio");
          }}
          onSignup={() => setPage("signup")}
        />
      )}

      {/* SIGNUP PAGE */}
      {page === "signup" && (
        <Signup
          onSignup={() => {
            showPopup("Signup successful 🎉");
            setPage("login");
          }}
          onLogin={() => setPage("login")}
        />
      )}

      {/* PORTFOLIO PAGE */}
      {page === "portfolio" && (
        <>
          <Navbar
            onLogout={() => {
              showPopup("Logout successful 👋");
              setPage("login");
            }}
          />

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

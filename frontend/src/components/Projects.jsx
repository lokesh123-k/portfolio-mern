export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="card">
        <h3>KL Stall & Decors</h3>
        <p>
          Event Management Web Application showcasing decoration
          packages, buffet stalls, and full event services.
        </p>
        <p>
          Tech Stack: HTML, CSS, JavaScript, React, Tailwind CSS,
          Supabase, Razorpay (Planned)
        </p>

        {/* OPTIONAL: Project live link */}
        <a
          href="https://k-lstall-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit Project
        </a>
      </div>
    </section>
  );
}

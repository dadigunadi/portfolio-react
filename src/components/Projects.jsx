function Projects() {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h3>Proyek Saya</h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        
        {/* Card 1 */}
        <div style={{
          background: "#fff",
          padding: "20px",
          width: "260px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <h4>Landing Page Sederhana</h4>
          <p style={{ fontSize: "14px", margin: "10px 0 20px" }}>
            Halaman web responsif yang dibuat dengan HTML & CSS dasar.
          </p>
          <a style={{ color: "#0077ff" }} target="_blank" href="https://sage-capybara-e791ea.netlify.app/">
            Lihat Online
          </a>
        </div>

        {/* Card 2 */}
        <div style={{
          background: "#fff",
          padding: "20px",
          width: "260px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <h4>Weather App</h4>
          <p style={{ fontSize: "14px", margin: "10px 0 20px" }}>
            Aplikasi untuk mengecek cuaca menggunakan API.
          </p>
          <a style={{ color: "#0077ff" }} target="_blank" href="https://soft-croissant-6ba1dc.netlify.app/">
            Lihat Online
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;

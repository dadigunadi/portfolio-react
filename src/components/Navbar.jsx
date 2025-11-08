function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      background: "#fff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ margin: 0 }}>DG</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ textDecoration: "none", color: "#333" }}>Home</a>
        <a href="#about" style={{ textDecoration: "none", color: "#333" }}>Tentang</a>
        <a href="#projects" style={{ textDecoration: "none", color: "#333" }}>Proyek</a>
        <a href="#kontak" style={{ textDecoration: "none", color: "#333" }}>Kontak</a>
      </div>
    </nav>
  );
}

export default Navbar;

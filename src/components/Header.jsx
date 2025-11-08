function Header() {
  return (
    <header style={{ padding: "60px 20px", textAlign: "center" }}>
      <img
        src="https://i.pravatar.cc/160?img=14"
        alt="profile"
        style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover" }}
      />
      <h2 style={{ marginTop: "20px" }}>Dadi Gunadi</h2>
      <p>Front-End Web Developer</p>
    </header>
  );
}

export default Header;

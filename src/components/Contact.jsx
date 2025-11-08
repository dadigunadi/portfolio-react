function Contact() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h3>Hubungi Saya</h3>
      <p>Siap untuk bekerja remote atau freelance.</p>

      {/* Tombol WhatsApp */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://wa.me/6281806891115"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat via WhatsApp
        </a>
      </div>

      {/* Form Email */}
      <form
        action="https://formsubmit.co/gunadi.dadi@gmail.com"
        method="POST"
        style={{ maxWidth: "400px", margin: "40px auto 0", textAlign: "left" }}
      >
        <input type="hidden" name="_captcha" value="false" />

        <label>Nama</label>
        <input
          type="text"
          name="name"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <label>Pesan</label>
        <textarea
          name="message"
          rows="4"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}

export default Contact;

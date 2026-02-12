export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.55)",
          padding: "60px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
          在线祈福
        </h1>

        <p style={{ fontSize: "22px", marginBottom: "40px" }}>
          点燃心香 · 传递愿望
        </p>

        <button
          style={{
            padding: "18px 40px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "#f59e0b",
            color: "white",
            fontWeight: "bold",
          }}
        >
          🔥 开始祈福
        </button>
      </div>
    </main>
  );
}

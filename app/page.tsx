export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* 三根香 */}
      <div style={styles. incenseWrapper}>
        <div style={styles.incense}></div>
        <div style={styles.incense}></div>
        <div style={styles.incense}></div>
      </div>

      <h1 style={styles.title}>在线祈福</h1>

      <button style={styles.button}>
        开始祈福
      </button>

    </main>
  );
}

const styles: any = {
  container: {
    height: "100vh",
    background: "linear-gradient(#0f172a,#020617)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  incenseWrapper: {
    display: "flex",
    gap: "40px",
    marginBottom: "60px",
  },

  incense: {
    width: "6px",
    height: "160px",
    background: "#f97316",
    position: "relative",
    borderRadius: "4px",
    animation: "burn 6s linear infinite",
  },

  title: {
    fontSize: "52px",
    marginBottom: "30px",
    letterSpacing: "6px",
  },

  button: {
    padding: "16px 40px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#f59e0b",
    color: "white",
    cursor: "pointer",
  },
};

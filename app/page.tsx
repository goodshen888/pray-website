export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.incenseWrapper}>
        
        <div style={styles.incense}>
          <div style={styles.smoke}></div>
        </div>

        <div style={styles.incense}>
          <div style={styles.smoke}></div>
        </div>

        <div style={styles.incense}>
          <div style={styles.smoke}></div>
        </div>

      </div>

      <h1 style={styles.title}>小蛙姐姐在线祈福</h1>

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
    gap: "60px",
    marginBottom: "80px",
  },

  incense: {
    width: "8px",
    height: "180px",
    background: "#f97316",
    position: "relative",
    borderRadius: "4px",
    animation: "burn 8s linear infinite",
  },

  smoke: {
    position: "absolute",
    top: "-35px",
    left: "-8px",
    width: "24px",
    height: "24px",
    background: "rgba(220,220,220,0.5)",
    borderRadius: "50%",
    filter: "blur(10px)",
    animation: "smoke 5s infinite ease-in-out",
  },

  title: {
    fontSize: "56px",
    letterSpacing: "6px",
    marginBottom: "30px",
  },

  button: {
    padding: "18px 46px",
    fontSize: "22px",
    borderRadius: "14px",
    border: "none",
    background: "#f59e0b",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

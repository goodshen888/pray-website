export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.incenseWrapper}>
        
        <div style={styles.incense}>

  <div style={styles.fire}></div>

  <div style={styles.smoke}></div>

</div>


        <div style={styles.incense}>

  <div style={styles.fire}></div>

  <div style={styles.smoke}></div>

</div>


        <div style={styles.incense}>

  <div style={styles.fire}></div>

  <div style={styles.smoke}></div>

</div>


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

  fire: {
    position: "absolute",
    top: "-8px",
    left: "-3px",
    width: "14px",
    height: "14px",
    background: "#fff7ed",
    borderRadius: "50%",
    boxShadow: "0 0 20px 8px orange",
  },

};


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
  transformOrigin: "top",
  animation: "burn 8s linear infinite",
},


smoke: {
  position: "absolute",
  top: "-45px",
  left: "-12px",
  width: "32px",
  height: "32px",
  background: "rgba(230,230,230,0.85)",
  borderRadius: "50%",
  filter: "blur(14px)",
  animation: "smoke 4s infinite ease-out",
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

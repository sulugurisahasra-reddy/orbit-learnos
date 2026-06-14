import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <h1 style={{ color: "white", textAlign: "center", marginTop: "200px" }}>
      Orbit Working
    </h1>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

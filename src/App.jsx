import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Tracker() {
  return <h1>Tracker</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";

function Login({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Ghouri EPOS Login</h2>
        <input className="w-full p-2 border rounded mb-3" placeholder="Username" />
        <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Password" />
        <button onClick={onLogin} className="w-full bg-black text-white py-2 rounded-xl">Enter System</button>
      </div>
    </div>
  );
}

function Home({ navigate }) {
  const opts = ["Dashboard", "Order Management", "Kitchen Management", "Call Center"];
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96 space-y-4">
        {opts.map(o => (
          <button key={o} onClick={() => navigate(o)} className="w-full py-3 border rounded-xl hover:bg-gray-100">{o}</button>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ goBack }) {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={goBack} className="border px-3 py-1 rounded">Back</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-white shadow rounded-xl">Total Orders</div>
        <div className="p-4 bg-white shadow rounded-xl">Revenue</div>
        <div className="p-4 bg-white shadow rounded-xl">Active Calls</div>
      </div>
      <div className="bg-white p-4 shadow rounded-xl">Order List Area (EPOS Table Here)</div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("login");

  if (page === "login") return <Login onLogin={() => setPage("home")} />;
  if (page === "home") return <Home navigate={(p) => setPage(p)} />;
  if (page === "Dashboard") return <Dashboard goBack={() => setPage("home")} />;

  return (
    <div className="p-8">
      <button onClick={() => setPage("home")} className="mb-4 border px-3 py-1 rounded">Back</button>
      <h2 className="text-xl font-bold">{page} (Under Construction)</h2>
    </div>
  );
}

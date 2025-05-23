"use client";

import { useState } from "react";
import NotifyModal from "@/app/components/NotifyModal";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("");
  const [showBanner, setShowBanner] = useState(true);

  const openModal = (tool) => {
    setSelectedTool(tool);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTool("");
  };

  const toolDescriptions = {
    "StartSafe": "Upload and deliver all 7 legally required tenancy start documents.",
    "ServeSafe": "Send legal notices like Section 21, Section 8 with proof.",
    "TenantScore": "Collect feedback and scores to build tenant references.",
    "KeyTrack": "Track key handovers and returns with timestamped proof.",
    "DocVault": "Store and share landlord documents — searchable and safe.",
    "FixLog": "Let tenants report repairs. You get notified + it gets logged.",
    "InventoryPro": "Create check-in/out inventories with condition photos.",
    "LLM Bot Assistant": "AI assistant to answer legal landlord questions."
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      {showBanner && (
        <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center rounded-lg shadow-lg py-4 px-6 mb-6">
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-4 text-white text-xl hover:opacity-80"
            aria-label="Dismiss banner"
          >
            &times;
          </button>
          🎉 <strong>LetSuite is now live!</strong> Start with StartSafe or join the waitlist for upcoming tools.
        </div>
      )}

      <NotifyModal toolName={selectedTool} isOpen={modalOpen} onClose={closeModal} />

      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-white rounded-2xl shadow p-6 w-fit">
          <img src="/images/letsuite-logo.png" alt="LetSuite logo" className="h-16 object-contain" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Robert 👋</h1>
          <p className="text-gray-600 mt-2">
            Here’s your LetSuite lettings toolkit — manage legal docs, rent, repairs and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {Object.entries(toolDescriptions).map(([title, description]) => (
            <ToolCard
              key={title}
              title={title}
              status={title === "StartSafe" ? "Live" : title === "LLM Bot Assistant" ? "Later Stage" : "Planned"}
              action={title === "StartSafe" ? "Use Now" : "Notify Me"}
              color={
                title === "StartSafe" ? "bg-green-500" :
                title === "ServeSafe" ? "bg-blue-500" :
                title === "TenantScore" ? "bg-yellow-500" :
                title === "KeyTrack" ? "bg-indigo-500" :
                title === "DocVault" ? "bg-purple-500" :
                title === "FixLog" ? "bg-orange-500" :
                title === "InventoryPro" ? "bg-rose-500" :
                "bg-gray-500"
              }
              onClick={() => title === "StartSafe" ? window.location.href = "/startsafe" : openModal(title)}
              description={description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard label="Notices served" value={3} />
          <StatCard label="New tenancies started" value={2} />
          <StatCard label="Rent receipts sent" value={5} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">📋 Recent Activity</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>📤 Rent receipt sent to Tenant Y (10 May)</li>
            <li>📨 Section 21 served on Tenant Y (8 May)</li>
            <li>🔧 Repair marked as complete for Property Z (6 May)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function ToolCard({ title, status, action, color, onClick, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
          {status}
        </span>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <button
        onClick={onClick}
        className={`mt-4 px-4 py-2 text-white rounded ${color} hover:opacity-90 text-sm`}
      >
        {action}
      </button>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

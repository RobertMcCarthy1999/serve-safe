'use client'

import { useState } from 'react'
import NotifyModal from '@/app/components/NotifyModal'

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState('')

  const openModal = (tool) => {
    setSelectedTool(tool)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTool('')
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <NotifyModal toolName={selectedTool} isOpen={modalOpen} onClose={closeModal} />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome, John! Here’s your Lettings Toolkit</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatCard label="Notices served" value={3} />
          <StatCard label="New tenancies started" value={2} />
          <StatCard label="Rent receipts sent" value={5} />
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
          <ToolCard title="StartSafe" status="Available" action="Use Now" color="bg-green-500" onClick={() => window.location.href = '/startsafe'} />
          <ToolCard title="RentFlow" status="Coming Soon" action="Notify Me" color="bg-blue-500" onClick={() => openModal('RentFlow')} />
          <ToolCard title="ServeSafe" status="Coming Soon" action="Notify Me" color="bg-slate-500" onClick={() => openModal('ServeSafe')} />
          <ToolCard title="FixLog" status="Planned" action="Notify Me" color="bg-orange-400" onClick={() => openModal('FixLog')} />
          <ToolCard title="DocVault" status="Planned" action="Notify Me" color="bg-purple-500" onClick={() => openModal('DocVault')} />
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Rent receipt sent to Tenant Y (10 May)</li>
            <li>Section 21 served on Tenant Y (8 May)</li>
            <li>Repair marked as complete for Property Z (6 May)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

// Subcomponents
function ToolCard({ title, status, action, color, onClick }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <span className="text-sm text-gray-500">{status}</span>
      </div>
      <button
        onClick={onClick}
        className={`mt-4 px-4 py-2 text-white rounded ${color} hover:opacity-90`}
      >
        {action}
      </button>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function NotifyModal({ toolName, isOpen, onClose }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Notify request for ${toolName}: ${email}`)
    setEmail('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Get notified when {toolName} launches</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Notify Me
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
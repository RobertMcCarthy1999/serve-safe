'use client';

import { useState } from 'react';

export default function InventoryProSendPage() {
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    setRooms([...rooms, { name: '', condition: '', notes: '' }]);
  };

  const updateRoom = (index, key, value) => {
    const newRooms = [...rooms];
    newRooms[index][key] = value;
    setRooms(newRooms);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Report</h1>

      {rooms.map((room, i) => (
        <div key={i} className="bg-white p-4 shadow rounded mb-4">
          <input
            className="w-full mb-2 border p-2 rounded"
            placeholder="Room name"
            value={room.name}
            onChange={(e) => updateRoom(i, 'name', e.target.value)}
          />
          <input
            className="w-full mb-2 border p-2 rounded"
            placeholder="Condition"
            value={room.condition}
            onChange={(e) => updateRoom(i, 'condition', e.target.value)}
          />
          <textarea
            className="w-full mb-2 border p-2 rounded"
            placeholder="Notes"
            value={room.notes}
            onChange={(e) => updateRoom(i, 'notes', e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={addRoom}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Room
      </button>
    </main>
  );
}

'use client';
import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

export default function InventoryProSendPage() {
  const [metadata, setMetadata] = useState({
    address: '',
    inspector: '',
    date: new Date().toISOString().split('T')[0],
    reportType: 'Check-in'
  });

  const [rooms, setRooms] = useState([]);
  const componentRef = useRef();

  const addRoom = () => {
    setRooms([...rooms, { name: '', items: [] }]);
  };

  const updateRoom = (i, key, value) => {
    const newRooms = [...rooms];
    newRooms[i][key] = value;
    setRooms(newRooms);
  };

  const addItemToRoom = (roomIndex) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].items.push({ label: '', condition: '', notes: '', photos: [] });
    setRooms(newRooms);
  };

  const updateItem = (roomIndex, itemIndex, key, value) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].items[itemIndex][key] = value;
    setRooms(newRooms);
  };

  const handlePhotoUpload = (roomIndex, itemIndex, files) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].items[itemIndex].photos = Array.from(files);
    setRooms(newRooms);
  };

  const saveReport = () => {
    const report = { metadata, rooms };
    localStorage.setItem(`report-${Date.now()}`, JSON.stringify(report));
    alert('Report saved locally.');
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">InventoryPro</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Property Address"
          value={metadata.address}
          onChange={(e) => setMetadata({ ...metadata, address: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Inspector Name"
          value={metadata.inspector}
          onChange={(e) => setMetadata({ ...metadata, inspector: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={metadata.date}
          onChange={(e) => setMetadata({ ...metadata, date: e.target.value })}
        />
        <select
          className="border p-2 rounded"
          value={metadata.reportType}
          onChange={(e) => setMetadata({ ...metadata, reportType: e.target.value })}
        >
          <option>Check-in</option>
          <option>Check-out</option>
          <option>Inspection</option>
        </select>
      </div>

      {rooms.map((room, i) => (
        <div key={i} className="border p-4 mb-4 rounded bg-white shadow">
          <input
            className="w-full mb-2 border p-2 rounded"
            placeholder="Room Name"
            value={room.name}
            onChange={(e) => updateRoom(i, 'name', e.target.value)}
          />
          {room.items.map((item, j) => (
            <div key={j} className="mb-4 border-t pt-4">
              <input
                className="w-full mb-2 border p-2 rounded"
                placeholder="Item (e.g. Wall 1)"
                value={item.label}
                onChange={(e) => updateItem(i, j, 'label', e.target.value)}
              />
              <input
                className="w-full mb-2 border p-2 rounded"
                placeholder="Condition"
                value={item.condition}
                onChange={(e) => updateItem(i, j, 'condition', e.target.value)}
              />
              <textarea
                className="w-full mb-2 border p-2 rounded"
                placeholder="Notes"
                value={item.notes}
                onChange={(e) => updateItem(i, j, 'notes', e.target.value)}
              />
              <input
                type="file"
                multiple
                onChange={(e) => handlePhotoUpload(i, j, e.target.files)}
              />
              {item.photos.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {item.photos.map((file, k) => (
                    <img
                      key={k}
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="h-16 w-16 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => addItemToRoom(i)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            + Add Item
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={addRoom}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Room
        </button>
        <button
          onClick={saveReport}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Report
        </button>
        <ReactToPrint
          trigger={() => (
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
              Export PDF
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>

      {/* Report Preview for PDF export */}
      <div className="hidden">
        <div ref={componentRef} className="p-6">
          <h1 className="text-2xl font-bold mb-2">Inventory Report</h1>
          <p><strong>Address:</strong> {metadata.address}</p>
          <p><strong>Inspector:</strong> {metadata.inspector}</p>
          <p><strong>Date:</strong> {metadata.date}</p>
          <p><strong>Type:</strong> {metadata.reportType}</p>

          {rooms.map((room, i) => (
            <div key={i} className="mt-4">
              <h2 className="font-bold text-lg mb-1">{room.name}</h2>
              {room.items.map((item, j) => (
                <div key={j} className="mb-2">
                  <p><strong>{item.label}:</strong> {item.condition}</p>
                  <p>{item.notes}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

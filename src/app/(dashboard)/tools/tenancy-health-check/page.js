'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TenantScoreLanding() {
  const { register, handleSubmit } = useForm();
  const [score, setScore] = useState(null);

  const questions = [
    {
      id: 'communication',
      label: 'How satisfied are you with the responsiveness of your landlord or agent?',
    },
    {
      id: 'repairs',
      label: 'Are repairs handled promptly?',
    },
    {
      id: 'legal',
      label: 'Have you received all required legal documents?',
    },
    {
      id: 'safety',
      label: 'Do you feel secure and safe in your home?',
    },
    {
      id: 'mould',
      label: 'Is the property clean and free of damp/mould?',
    },
  ];

  const onSubmit = (data) => {
    let total = 0;
    questions.forEach((q) => {
      total += parseInt(data[q.id] || '0');
    });
    const result = Math.round((total / (questions.length * 5)) * 100);
    setScore(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      {/* HERO */}
      <section className="text-center py-16 px-6 bg-yellow-100">
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">TenantScore: Health Check</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Quickly assess the quality of your tenancy. Get a clear score based on your experience — and share it with your landlord if needed.
        </p>
        <a href="#form" className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
          Start Health Check
        </a>
      </section>

      {/* WHY USE */}
      <section className="py-14 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Use TenantScore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Know Your Rights</h3>
            <p className="text-sm text-gray-600">Quickly check if your tenancy meets UK legal and safety standards.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Track Property Health</h3>
            <p className="text-sm text-gray-600">Spot potential problems before they escalate and keep a record.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold mb-2 text-yellow-600">Build References</h3>
            <p className="text-sm text-gray-600">Share your score with future landlords to show you’re a great tenant.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="bg-white py-14 px-6 border-t">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Tenancy Health Check</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {questions.map((q) => (
              <div key={q.id}>
                <label className="block font-medium mb-1">{q.label}</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  {...register(q.id)}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Rate 1 (low) to 5 (high)"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Calculate Score
            </button>
          </form>

          {score !== null && (
            <div className="mt-8 p-6 border-2 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">Health Score: {score}/100</h3>
              <p className="text-lg font-medium">
                {score > 80 ? (
                  <span className="text-green-600">✅ Healthy Tenancy</span>
                ) : score > 50 ? (
                  <span className="text-yellow-600">⚠️ Needs Attention</span>
                ) : (
                  <span className="text-red-600">🚨 High Risk Tenancy</span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
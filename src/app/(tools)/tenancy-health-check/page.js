'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function TenancyHealthCheck() {
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tenancy Health Check</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {questions.map((q) => (
          <div key={q.id}>
            <label className="block mb-1 font-medium">{q.label}</label>
            <input
              type="number"
              min="1"
              max="5"
              {...register(q.id)}
              placeholder="Rate 1 (low) to 5 (high)"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Calculate Score
        </button>
      </form>

      {score !== null && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h2 className="text-xl font-semibold">Health Score: {score}/100</h2>
          <p className="mt-2">
            {score > 80
              ? '✅ Healthy Tenancy'
              : score > 50
              ? '⚠️ Needs Attention'
              : '🚨 High Risk Tenancy'}
          </p>
        </div>
      )}
    </div>
  );
}

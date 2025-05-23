// src/app/components/StartSafeOnboardingModal.js
"use client"; // 👈 REQUIRED for React hooks in Next.js App Router

import { useState, useEffect } from 'react';

export default function StartSafeOnboardingModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('startsafeOnboardingSeen');
    if (!hasSeen) setShowModal(true);
  }, []);

  const handleClose = (dontShowAgain) => {
    if (dontShowAgain) localStorage.setItem('startsafeOnboardingSeen', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Which documents do I need to send?</h2>
        <div className="space-y-4 text-sm">
          <p>
            As a landlord or letting agent in England, you must provide key documents before a tenancy begins. StartSafe helps you send them with proof.
          </p>
          <div>
            <h3 className="font-semibold">✅ Legally Required Documents</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>How to Rent Guide</strong> – Latest version from GOV.UK</li>
              <li><strong>Energy Performance Certificate (EPC)</strong> – Rated E or above</li>
              <li><strong>Gas Safety Certificate</strong> – For properties with gas</li>
              <li><strong>Deposit Protection Certificate</strong> – Plus prescribed info</li>
              <li><strong>Electrical Installation Condition Report (EICR)</strong> – Valid within 5 years</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">📎 Strongly Recommended</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Tenancy Agreement (AST)</strong> – Signed by both parties</li>
              <li><strong>Legionella Risk Assessment</strong> – Not mandatory but best practice</li>
              <li><strong>Smoke & CO Alarm Checklist</strong> – Ensure safety compliance</li>
              <li><strong>HMO/Local Authority License</strong> – If applicable</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <label className="flex items-center space-x-2 text-xs">
            <input
              type="checkbox"
              className="accent-blue-500"
              onChange={(e) => handleClose(e.target.checked)}
            />
            <span>Don't show this again</span>
          </label>
          <button
            onClick={() => handleClose(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
          >
            Let’s Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

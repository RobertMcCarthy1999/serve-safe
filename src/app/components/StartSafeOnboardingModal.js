"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export default function StartSafeOnboardingModal() {
  const pathname = usePathname();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    const seen = isDev ? null : Cookies.get('startsafeSeen');
    const onSendPage = pathname === '/startsafe/send';

    if (!seen && !onSendPage) {
      setShowModal(true);
    }
  }, [pathname]);

  const closeModal = (dontShowAgain = false) => {
    setFadeOut(true);
    setTimeout(() => {
      if (dontShowAgain) {
        Cookies.set('startsafeSeen', 'true', { expires: 365 });
        toast.success("We won’t show this again.");
      }
      setShowModal(false);
    }, 300);
  };

  const handleRedirect = () => {
    toast.success("Redirecting to upload...");
    closeModal(true);
    router.push('/startsafe/send');
  };

  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline h-4 w-4 ml-1 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-1-4l-8 8m-4-4v5a1 1 0 001 1h5" />
    </svg>
  );

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/60 transition-all duration-300 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 sm:p-10 overflow-y-auto max-h-[90vh]">
        
        {/* Close Icon */}
        <button
          onClick={() => closeModal(true)}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Which documents do I need to send?</h2>

        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>
            As a landlord or letting agent in England, you must provide key documents before a tenancy begins. StartSafe helps you send them with proof.
          </p>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">✅ Legally Required Documents</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a href="https://www.gov.uk/government/publications/how-to-rent" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  How to Rent Guide <ExternalLinkIcon />
                </a> – Latest version from GOV.UK
              </li>
              <li>
                <a href="https://www.gov.uk/find-energy-certificate" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Energy Performance Certificate (EPC) <ExternalLinkIcon />
                </a> – Rated E or above
              </li>
              <li>
                <a href="https://www.gassaferegister.co.uk/help-and-advice/renting-a-property/information-for-tenants/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Gas Safety Certificate <ExternalLinkIcon />
                </a> – For properties with gas
              </li>
              <li>
                <a href="https://www.gov.uk/tenancy-deposit-protection" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Deposit Protection Certificate <ExternalLinkIcon />
                </a> – Plus prescribed info
              </li>
              <li>
                <a href="https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-rented-sector-guidance-for-landlords-tenants-and-local-authorities" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Electrical Installation Condition Report (EICR) <ExternalLinkIcon />
                </a> – Valid within 5 years
              </li>
            </ul>
          </div>

          <hr className="my-4 border-t border-gray-200" />

          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900">📎 Strongly Recommended</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a href="https://www.gov.uk/private-renting-tenancy-agreements" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Tenancy Agreement (AST) <ExternalLinkIcon />
                </a> – Signed by both parties
              </li>
              <li>
                <a href="https://www.hse.gov.uk/legionnaires/legionella-landlords-responsibilities.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Legionella Risk Assessment <ExternalLinkIcon />
                </a> – Not mandatory but best practice
              </li>
              <li>
                <a href="https://www.gov.uk/government/publications/smoke-and-carbon-monoxide-alarms-explanatory-booklet-for-landlords" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Smoke & CO Alarm Checklist <ExternalLinkIcon />
                </a> – Ensure safety compliance
              </li>
              <li>
                <a href="https://www.gov.uk/private-renting/houses-in-multiple-occupation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  HMO/Local Authority License <ExternalLinkIcon />
                </a> – If applicable
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between items-center">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="accent-blue-600"
              id="dontShowCheckbox"
            />
            <span>Don't show this again</span>
          </label>
          <button
            onClick={() => {
              const dontShowAgain = document.getElementById('dontShowCheckbox').checked;
              closeModal(dontShowAgain);
            }}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return <Toaster position="top-right" reverseOrder={false} toastOptions={{ className: "z-[9999]" }} />;
}

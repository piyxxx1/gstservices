"use client";

import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingContact() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="fixed right-3 bottom-3 z-50 flex flex-col items-end gap-2">
      <a
        href="https://wa.link/5hfkqf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:bg-green-600 transition-all focus:outline-none focus:ring-0"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="mailto:palmprintindia@gmail.com"
        aria-label="Send Email"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all focus:outline-none focus:ring-0"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

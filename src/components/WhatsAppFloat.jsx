import React, { useEffect, useState } from "react";

const WhatsAppFloat = () => {
  const [bounceKey, setBounceKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounceKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/918848430164"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed right-4 bottom-6 z-50
        flex items-center gap-3
      "
    >
      {/* TALK TO US */}
      <span
        className="
          relative
          bg-white text-black text-sm font-medium
          px-4 py-2 rounded-lg
          shadow-lg border border-gray-100
          whitespace-nowrap
        "
      >
        Talk to us

        {/* Arrow */}
        <span
          className="
            absolute
            top-1/2 -right-1 -translate-y-1/2
            w-0 h-0
            border-t-6 border-t-transparent
            border-b-6 border-b-transparent
            border-l-6 border-l-white
          "
        />
      </span>

      {/* WHATSAPP ICON */}
      <div key={bounceKey} className="custom-bounce">
        <div
          className="
            w-14 h-14 md:w-16 md:h-16
            rounded-full bg-[#25D366]
            flex items-center justify-center
            shadow-xl
            hover:scale-110
            transition-transform duration-300
          "
        >
          <img
            src="/icons8-whatsapp.svg"
            alt="WhatsApp"
            className="w-8 h-8 md:w-9 md:h-9"
          />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;

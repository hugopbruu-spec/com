import { useId } from "react";

export default function BrandContactIcon({
  brand,
  size = 18,
  className = "",
}) {
  const gradientId = useId().replace(/:/g, "");
  const commonProps = {
    "aria-hidden": "true",
    className,
    height: size,
    viewBox: "0 0 24 24",
    width: size,
  };

  if (brand === "gmail" || brand === "mail" || brand === "email") {
    return (
      <svg {...commonProps}>
        <path d="M4 18V7.95L8 11.05V18H4Z" fill="#1A73E8" />
        <path d="M16 11.05L20 7.95V18H16V11.05Z" fill="#34A853" />
        <path
          d="M4 7.95C4 6.96 5.13 6.39 5.94 7.01L12 11.73L18.06 7.01C18.87 6.39 20 6.96 20 7.95V8.35L12 14.66L4 8.35V7.95Z"
          fill="#EA4335"
        />
        <path
          d="M16 11.05L20 7.95C20 6.96 18.87 6.39 18.06 7.01L14.92 9.45L16 11.05Z"
          fill="#FBBC04"
        />
      </svg>
    );
  }

  if (brand === "whatsapp" || brand === "phone") {
    return (
      <svg {...commonProps}>
        <rect x="1" y="1" width="22" height="22" rx="4.6" fill="#25D366" />
        <path
          d="M12 5.2C8.56 5.2 5.78 7.93 5.78 11.29C5.78 12.47 6.12 13.58 6.71 14.53L5.88 18.07L9.52 17.18C10.39 17.7 11.39 17.98 12.4 17.98C15.84 17.98 18.62 15.25 18.62 11.89C18.62 8.53 15.44 5.2 12 5.2Z"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.85"
        />
        <path
          d="M10.03 8.36C9.85 7.98 9.67 7.97 9.5 7.96L9.06 7.95C8.91 7.95 8.66 8 8.45 8.23C8.24 8.46 7.64 9.01 7.64 10.09C7.64 11.17 8.47 12.2 8.59 12.35C8.71 12.5 10.2 14.88 12.48 15.84C14.37 16.63 14.75 16.47 15.16 16.43C15.56 16.38 16.47 15.9 16.66 15.38C16.84 14.87 16.84 14.43 16.79 14.35C16.73 14.27 16.58 14.23 16.35 14.12C16.13 14.01 15.03 13.48 14.83 13.41C14.63 13.33 14.49 13.3 14.34 13.52C14.19 13.75 13.78 14.24 13.65 14.39C13.52 14.54 13.39 14.56 13.16 14.44C12.94 14.33 12.22 14.09 11.37 13.34C10.71 12.75 10.26 12.02 10.12 11.79C9.98 11.56 10.11 11.43 10.22 11.32C10.32 11.21 10.45 11.03 10.56 10.9C10.67 10.77 10.71 10.68 10.78 10.53C10.85 10.38 10.82 10.25 10.77 10.14C10.71 10.03 10.27 8.97 10.03 8.36Z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <defs>
        <linearGradient id={gradientId} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F9CE34" />
          <stop offset="0.32" stopColor="#EE2A7B" />
          <stop offset="0.68" stopColor="#6228D7" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5.2" fill={`url(#${gradientId})`} />
      <rect
        x="7.2"
        y="7.2"
        width="9.6"
        height="9.6"
        rx="3"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="16.6" cy="7.6" r="1.1" fill="#ffffff" />
    </svg>
  );
}

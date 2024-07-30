// src/components/HomeIcon.tsx

import React from "react";

interface BookIconProps {
  size?: string;
  color?: string;
  hoverColor?: string;
}

export const BookIcon: React.FC<BookIconProps> = ({
  size = "w-6 h-6",
  color = "#9EA7B0",
  hoverColor = "white",
}) => {
  return (
    <div
      className={`${size} transition duration-75 group-hover:text-${hoverColor}`}
      style={{ color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
      </svg>
    </div>
  );
};
{
  /* <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
</svg> */
}

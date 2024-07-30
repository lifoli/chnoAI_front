// src/components/Layout.tsx

import { ReactNode } from "react";
import { Component } from "./SidebarComponent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Component />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { Search } from "lucide-react";
export default function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-row">
      {/* Toggles sidebar on click */}
      {sidebar && <Sidebar />}
      <div className="flex gap-x-6 md:gap-x-10">
        <Menu
          className="size-8 md:hidden cursor-pointer"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Search className="size-8 md:hidden" />
      </div>
    </div>
  );
}

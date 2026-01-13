"use client";

import { memo, useState } from "react";
import { SidebarProps } from "./types";
import { RiArrowLeftSLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import AppIcon from "../app-global-icon/app-global-icon";
import { navigationItems } from "./data";

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-full w-64
          border-r border-white-25 shadow-lg
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" aria-label="Podbay" className="pt-5">
            <AppIcon />
          </Link>

          <button
            onClick={onToggle}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
          >
            <RiArrowLeftSLine className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <ul className="space-y-6">
            {navigationItems.map((section, index) => (
              <li key={index} className="space-y-2">
                {/* Section title */}
                {section.title && (
                  <div className="px-2 text-xs font-bold tracking-wider text-gray-400">
                    {section.title}
                  </div>
                )}

                {/* Items */}
                <div className="flex flex-col space-y-1">
                  {section.items.map(({ id, label, icon }) => {
                    const isActive = id === activeId;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveId(id)}
                        className={`
                          group flex items-center gap-3 rounded-lg px-3 py-2
                          transition-colors
                          ${isActive ? "bg-white/10" : "hover:bg-white/5"}
                        `}
                      >
                        <Image
                          src={icon}
                          alt={label}
                          width={18}
                          height={18}
                          className="transition-all duration-200"
                          style={{
                            filter: isActive
                              ? "brightness(1.6)"
                              : "brightness(0.7)",
                          }}
                        />

                        {/* Label */}
                        <span
                          className="text-sm font-semibold transition-colors duration-200"
                        >
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-[12px] text-white-25">
          <p>Podbay v2.9.6 by Fancy Soups.</p>
          <div className="mt-1 flex gap-3">
            <Link href="/">About</Link>
            <Link href="/">All Podcasts</Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Sidebar);

"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["Work", "#work"],
  ["AI Videos", "#ai-videos"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="monogram" href="#home" aria-label="Yash Sata home">
        YS
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav
          className="mobile-nav glass-panel"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

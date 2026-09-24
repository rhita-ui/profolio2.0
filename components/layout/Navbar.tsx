"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import Magnetic from "../animations/Magnetic";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Work", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Research", href: "/#research" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current || !menuOpen) return;

    gsap.fromTo(
      menuRef.current,
      {
        clipPath: "inset(0 0 100% 0)",
      },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.7,
        ease: "power4.inOut",
      }
    );

    gsap.fromTo(
      ".mobile-nav-item",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.15,
        ease: "power3.out",
      }
    );
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* LOGO → HOME */}
        <Magnetic>
          <a
            href="/"
            className="block text-2xl font-bold tracking-tighter"
            aria-label="Go to homepage"
          >
            R<span className="text-violet-400">.</span>
          </a>
        </Magnetic>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <Magnetic>
            <a
              href="/#contact"
              className="block rounded-full border border-white/15 px-5 py-2.5 text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              Let's talk
            </a>
          </Magnetic>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="relative z-[60] text-white md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 flex min-h-screen flex-col justify-between bg-black px-6 pb-10 pt-32 md:hidden"
        >
          <div className="flex flex-col">

            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="mobile-nav-item group flex items-center justify-between border-t border-white/10 py-6 text-4xl font-medium tracking-tight"
              >
                <span>{item.name}</span>

                <span className="text-white/20 transition-colors duration-300 group-hover:text-white">
                  0{index + 1}
                </span>
              </a>
            ))}

          </div>

          <div className="mobile-nav-item flex items-center justify-between border-t border-white/10 pt-6">

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Let's build something
            </p>

            <ArrowUpRight
              size={22}
              className="text-white/40"
            />

          </div>
        </div>
      )}
    </header>
  );
}
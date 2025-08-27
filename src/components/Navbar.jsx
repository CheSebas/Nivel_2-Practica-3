import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/details", label: "Details" },
  { to: "/features", label: "Features" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base =
    "px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200";
  const active = "text-primary underline underline-offset-8";
  const inactive = "text-gray-700 hover:text-primary";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-white shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Che<span className="text-gray-400">Sebas</span>
        </Link>

        {/* Botón menú mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-2 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${base} ${
                    isActive
                      ? "text-primary bg-gray-100"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

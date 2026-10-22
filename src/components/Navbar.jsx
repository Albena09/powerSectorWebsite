import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Zap, Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-green-50 text-green-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-green-700"
    }`;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <Zap size={24} fill="currentColor" />
          </span>

          <span>
            <span className="block text-lg font-black tracking-tight text-slate-900">
             Power China Engineering Comapany
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-slate-500">
              ENERGY FOR TOMORROW
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyle}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-3 flex items-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

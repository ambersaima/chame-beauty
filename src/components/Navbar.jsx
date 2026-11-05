
import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Shop", "#categories"],
  ["Collections", "#products"],
  ["Beauty tips", "#beauty-tips"],
  ["Our story", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar({ bagCount = 0, wishlistCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavigation = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1e6e2] bg-[#fffdfb]/95 backdrop-blur-md">
      <div className="container-wide flex h-[72px] items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="serif text-[34px] leading-none tracking-[-.06em] text-[#302426]"
          aria-label="CHAMÉ home"
        >
          chamé<span className="text-[#d997a0]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => handleNavigation(href)}
              aria-current={activeLink === href ? "page" : undefined}
              className={`relative py-2 text-[11px] font-semibold transition-colors duration-300 hover:text-[#c27d87] ${
                activeLink === href
                  ? "text-[#c27d87]"
                  : "text-[#514448]"
              }`}
            >
              {label}

              {activeLink === href && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#d997a0]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 text-[#302426]">

          <span
            className="hidden cursor-default text-[#6c595b] sm:block"
            title="Search feature coming soon"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </span>

          <span
            className="hidden cursor-default text-[#6c595b] sm:block"
            title="Account feature coming soon"
            aria-label="Account"
          >
            <UserRound size={18} strokeWidth={1.5} />
          </span>

          {/* Wishlist */}
          <a
            href="#products"
            className="relative transition-colors duration-300 hover:text-[#c27d87]"
            aria-label={`Wishlist, ${wishlistCount} items`}
          >
            <Heart size={19} strokeWidth={1.5} />

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-[#d997a0] text-[9px] text-white">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* Shopping Bag */}
          <a
            href="#products"
            className="relative transition-colors duration-300 hover:text-[#c27d87]"
            aria-label={`Shopping bag, ${bagCount} items`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />

            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-[#d997a0] text-[9px] text-white">
              {bagCount}
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="ml-1 transition-colors hover:text-[#c27d87] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-[#f1e6e2] bg-[#fffdfb] px-6 py-5 lg:hidden">
          <div className="container-wide flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => handleNavigation(href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#c27d87] ${
                  activeLink === href
                    ? "text-[#c27d87]"
                    : "text-[#514448]"
                }`}
              >
                {label}
              </a>
            ))}

            <div className="flex gap-5 border-t border-[#f1e6e2] pt-4 text-xs text-[#6c595b]">
              <span className="flex items-center gap-2">
                <Search size={15} />
                Search
              </span>

              <span className="flex items-center gap-2">
                <UserRound size={15} />
                Account
              </span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

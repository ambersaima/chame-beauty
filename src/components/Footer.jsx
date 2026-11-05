
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#302426] text-[#fff8f5]">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:py-16">

        {/* Brand */}
        <div>
          <a
            href="#home"
            className="serif text-4xl tracking-[-.06em]"
          >
            chamé<span className="text-[#d99ba2]">.</span>
          </a>

          <p className="mt-4 max-w-xs text-xs leading-6 text-[#c5b2b1]">
            Thoughtful beauty for your everyday rituals. A little care,
            a little colour, a lot of you.
          </p>

          <div className="mt-6 flex gap-5 text-[#e6c4c4]">
            <a href="#contact" aria-label="Instagram" className="hover:text-white transition">
              <FaInstagram size={18} />
            </a>

            <a href="#contact" aria-label="Facebook" className="hover:text-white transition">
              <FaFacebookF size={17} />
            </a>

            <a href="#contact" aria-label="Youtube" className="hover:text-white transition">
              <FaYoutube size={19} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="eyebrow text-[#d99ba2]">Explore</h3>

          <ul className="mt-5 space-y-3 text-xs text-[#d8c9c7]">
            <li><a href="#categories" className="hover:text-white">Shop all</a></li>
            <li><a href="#products" className="hover:text-white">Bestsellers</a></li>
            <li><a href="#about" className="hover:text-white">Our story</a></li>
            <li><a href="#beauty-tips" className="hover:text-white">Beauty notes</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="eyebrow text-[#d99ba2]">Help</h3>

          <ul className="mt-5 space-y-3 text-xs text-[#d8c9c7]">
            <li><a href="#contact" className="hover:text-white">Contact us</a></li>
            <li><a href="#contact" className="hover:text-white">Shipping & delivery</a></li>
            <li><a href="#contact" className="hover:text-white">Returns</a></li>
            <li><a href="#contact" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow text-[#d99ba2]">Say hello</h3>

          <p className="mt-5 text-xs leading-6 text-[#d8c9c7]">
            Have a question or just want to say hi?
          </p>

          <a
            href="mailto:hello@chamebeauty.example"
            className="mt-3 inline-flex items-center gap-2 text-xs text-white hover:text-[#d99ba2] transition"
          >
            hello@chamebeauty.example
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col justify-between gap-3 py-5 text-[9px] tracking-[.1em] text-[#a99595] sm:flex-row">
          <span>© 2026 CHAMÉ BEAUTY. MADE WITH A LITTLE LOVE.</span>
          <span>PRIVACY · TERMS · ALL THE GOOD THINGS</span>
        </div>
      </div>
    </footer>
  );
}

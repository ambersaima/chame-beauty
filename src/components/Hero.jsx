
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4e5e0] py-10 sm:py-12 md:py-14"
    >
      <div className="container-wide">
        <div className="relative grid min-h-[410px] items-center gap-8 overflow-hidden rounded-[28px] bg-[#eadbd6] px-6 py-10 sm:px-10 md:min-h-[450px] md:grid-cols-2 md:gap-5 md:px-12 lg:px-16">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1800&q=90"
            alt="Elegant skincare products arranged in warm natural light"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7e8e3]/95 via-[#f7e8e3]/80 to-[#f7e8e3]/20 md:from-[#f7e8e3]/95 md:via-[#f7e8e3]/85 md:to-transparent" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-[520px]"
          >
            <p className="eyebrow mb-4 text-[#9b666d]">
              A softer kind of beauty
            </p>

            <h1 className="serif text-[43px] leading-[1.08] tracking-[-.045em] text-[#302426] sm:text-5xl md:text-[58px] lg:text-[66px]">
              Glow like
              <br />
              <em className="font-normal text-[#bd7882]">
                never before.
              </em>
            </h1>

            <p className="mt-4 max-w-97.5 text-xs leading-6 text-[#69585a] sm:text-sm sm:leading-7">
              Thoughtful formulas, feel-good textures and little moments
              of self-care. Meet the essentials that make your natural
              glow feel effortless.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="pill-button group inline-flex items-center gap-3"
              >
                Shop the edit
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="text-link text-[#49383a] transition-colors duration-300 hover:text-[#bd7882]"
              >
                Our philosophy
              </a>
            </div>

            {/* Bottom Caption */}
            <div className="mt-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.16em] text-[#8c6b6d] sm:text-[10px]">
              <span className="h-px w-9 bg-[#c18b8e]" />
              Made for your everyday ritual
            </div>
          </motion.div>

          {/* Decorative Label */}
          <div className="relative z-10 hidden items-end justify-end self-end text-[9px] uppercase tracking-[.2em] text-[#69585a] md:flex">
            <span>01</span>
            <span className="mx-3 h-px w-10 bg-[#a98785]" />
            <span>Beauty in bloom</span>
          </div>

        </div>
      </div>
    </section>
  );
}

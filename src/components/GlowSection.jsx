
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Thoughtful formulas",
    description: "Ingredients chosen with care, made to feel good on your skin.",
  },
  {
    number: "02",
    title: "Beauty without rules",
    description: "Celebrate your own kind of beauty, every single day.",
  },
  {
    number: "03",
    title: "Little daily rituals",
    description: "Turn everyday moments into something worth slowing down for.",
  },
];

export default function GlowSection() {
  return (
    <section
      id="beauty-tips"
      className="overflow-hidden bg-[#f7eeea] py-12 md:py-16"
    >
      <div className="container-wide">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-[#bd7e85]">
              The CHAMÉ philosophy
            </p>

            <h2 className="serif mt-4 max-w-[520px] text-3xl leading-[1.13] tracking-[-.04em] text-[#302426] sm:text-4xl md:text-5xl">
              Beauty is not about changing.
              <em className="font-normal text-[#bd7882]">
                {" "}It's about feeling like you.
              </em>
            </h2>

            <p className="mt-4 max-w-[420px] text-xs leading-6 text-[#786467] sm:text-sm">
              We believe the best beauty routine is the one that feels
              like you. Discover thoughtful essentials that bring a
              little more joy, confidence and care into your everyday.
            </p>

            <a
              href="#categories"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#bd9291] pb-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#49383a] transition-colors hover:text-[#bd7882]"
            >
              Discover our world
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-7 flex items-center gap-3 text-[#bd7882]">
              <Sparkles size={17} strokeWidth={1.4} />
              <span className="text-[9px] font-semibold uppercase tracking-[.17em] sm:text-[10px]">
                A little love, a lot of glow
              </span>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="border-t border-[#e6d5d0]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-[38px_1fr] gap-3 border-b border-[#e6d5d0] py-5 sm:grid-cols-[48px_1fr] sm:gap-5 sm:py-6"
              >
                <span className="serif pt-1 text-lg italic text-[#c28b90]">
                  {feature.number}
                </span>

                <div>
                  <h3 className="serif text-xl text-[#302426] sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 max-w-[350px] text-[11px] leading-5 text-[#887477] sm:text-xs sm:leading-6">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Lips",
    subtitle: "A kiss of colour",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Complexion",
    subtitle: "Your skin, elevated",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Eyes",
    subtitle: "Make every look count",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Skincare",
    subtitle: "Care that feels good",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Perfume",
    subtitle: "A scent to remember",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Makeup",
    subtitle: "Play with your glow",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Beauty Tools",
    subtitle: "Your beauty essentials",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="overflow-hidden bg-[#fffdfb] py-12 md:py-16"
    >
      <div className="container-wide">

        {/* Section Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-9">
          <div>
            <p className="eyebrow text-[#bd7e85]">
              Find your favourites
            </p>

            <h2 className="serif mt-3 text-3xl tracking-[-.04em] text-[#302426] sm:text-4xl md:text-5xl">
              Shop by category
            </h2>

            <p className="mt-2 max-w-[400px] text-xs leading-6 text-[#927e7e] sm:text-sm">
              Little beauty discoveries for every mood, moment and ritual.
            </p>
          </div>

          <a
            href="#products"
            className="group mb-1 inline-flex items-center gap-2 border-b border-[#c99b9b] pb-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#49383a] transition-colors hover:text-[#bd7882]"
          >
            Explore all
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.a
              href="#products"
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
              }}
              className="group block min-w-0"
            >
              {/* Rounded Category Image */}
              <div className="relative aspect-[.9] overflow-hidden rounded-[25px] bg-[#f5e9e5] sm:rounded-[32px]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302426]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[#49383a] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#d997a0] group-hover:text-white sm:h-9 sm:w-9">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              {/* Category Details */}
              <div className="mt-3 sm:mt-4">
                <h3 className="serif text-lg text-[#302426] transition-colors duration-300 group-hover:text-[#bd7882] sm:text-xl md:text-2xl">
                  {category.name}
                </h3>

                <p className="mt-1 text-[8px] uppercase tracking-[.13em] text-[#9b8585] sm:text-[10px]">
                  {category.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

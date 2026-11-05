
import { useRef } from "react";
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "chame-1",
    name: "Velvet Matte Lipstick",
    category: "Lips",
    price: 599,
    oldPrice: 749,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-2",
    name: "Silk Touch Foundation",
    category: "Complexion",
    price: 1099,
    oldPrice: 1299,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  },
  
  {
    id: "chame-4",
    name: "Rose Glow Face Serum",
    category: "Skincare",
    price: 899,
    oldPrice: 1099,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-5",
    name: "Vanilla Cloud Perfume",
    category: "Perfume",
    price: 1299,
    oldPrice: 1499,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-6",
    name: "Champagne Glow Highlighter",
    category: "Complexion",
    price: 799,
    oldPrice: 999,
    tag: "Glow Pick",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-7",
    name: "Rose Gold Eyeshadow Palette",
    category: "Eyes",
    price: 749,
    oldPrice: 899,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-8",
    name: "Cloud Soft Moisturizer",
    category: "Skincare",
    price: 749,
    oldPrice: 899,
    tag: "Daily Essential",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-9",
    name: "Soft Touch Brush Set",
    category: "Beauty Tools",
    price: 899,
    oldPrice: 1099,
    tag: "Must Have",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "chame-10",
    name: "Petal Cream Blush",
    category: "Makeup",
    price: 699,
    oldPrice: 849,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85";

export default function Products({
  onAdd,
  wishlist = [],
  onWishlist,
}) {
  const sliderRef = useRef(null);

  const scrollProducts = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".product-card");

    const amount = card
      ? card.getBoundingClientRect().width + 20
      : 300;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="products"
      className="overflow-hidden bg-[#f8f1ed] py-12 md:py-16"
    >
      <div className="container-wide">

        {/* Heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 md:mb-9">
          <div>
            <p className="eyebrow text-[#bd7e85]">
              The CHAMÉ edit
            </p>

            <h2 className="serif mt-2 text-3xl tracking-[-.04em] text-[#302426] sm:text-4xl md:text-5xl">
              Little things,
              <br className="sm:hidden" /> lovely glow.
            </h2>

            <p className="mt-2 max-w-md text-xs leading-6 text-[#887477] sm:text-sm">
              Discover your new beauty favourites, made for
              every mood and every moment.
            </p>
          </div>

          <a
            href="#categories"
            className="group mb-1 inline-flex items-center gap-2 border-b border-[#c99b9b] pb-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#49383a] transition-colors hover:text-[#bd7882]"
          >
            Explore categories
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Slider Header */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#987d7e]">
            Our favourites · 10 products
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollProducts("left")}
              aria-label="Previous products"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#d9c5c0] text-[#49383a] transition-all duration-300 hover:border-[#d997a0] hover:bg-[#d997a0] hover:text-white"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollProducts("right")}
              aria-label="Next products"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#d9c5c0] text-[#49383a] transition-all duration-300 hover:border-[#d997a0] hover:bg-[#d997a0] hover:text-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Product Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 sm:gap-5 md:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, index) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.06,
                }}
                className="product-card w-[calc(50%-8px)] min-w-[calc(50%-8px)] snap-start sm:w-[calc(50%-10px)] sm:min-w-[calc(50%-10px)] md:w-[calc(33.333%-16px)] md:min-w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] lg:min-w-[calc(25%-18px)]"
              >
                {/* Product Image */}
                <div className="group relative aspect-[.82] overflow-hidden rounded-[24px] bg-[#eaded9] sm:rounded-[30px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(event) => {
                      if (!event.currentTarget.dataset.fallback) {
                        event.currentTarget.dataset.fallback = "true";
                        event.currentTarget.src = fallbackImage;
                      }
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Product Tag */}
                  {product.tag && (
                    <span className="absolute left-2 top-2 rounded-full bg-[#fffaf8]/95 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.12em] text-[#795c5e] sm:left-3 sm:top-3">
                      {product.tag}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={() => onWishlist?.(product.id)}
                    aria-label={
                      isWishlisted
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={isWishlisted}
                    className={`absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#f1d6d6] sm:right-3 sm:top-3 sm:h-9 sm:w-9 ${
                      isWishlisted
                        ? "text-[#c16e7b]"
                        : "text-[#4c3d3f]"
                    }`}
                  >
                    <Heart
                      size={15}
                      fill={isWishlisted ? "currentColor" : "none"}
                    />
                  </button>

                  {/* Desktop Add To Bag */}
                  <button
                    type="button"
                    onClick={() => onAdd?.(product)}
                    className="absolute bottom-3 left-3 right-3 hidden translate-y-3 items-center justify-center gap-2 rounded-full bg-[#fffaf8]/95 py-3 text-[9px] font-bold uppercase tracking-[.14em] text-[#49383a] opacity-0 shadow-sm transition-all duration-300 hover:bg-[#d997a0] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 md:flex"
                  >
                    <ShoppingBag size={14} />
                    Add to bag
                  </button>
                </div>

                {/* Product Details */}
                <div className="pt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#b47c82]">
                    {product.category}
                  </p>

                  <h3 className="serif mt-1 text-base leading-snug text-[#302426] sm:text-lg">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-[#302426]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.oldPrice && (
                      <span className="text-[#a99595] line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Mobile Add To Bag */}
                  <button
                    type="button"
                    onClick={() => onAdd?.(product)}
                    className="mt-2 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#a86e77] transition-colors hover:text-[#302426] md:hidden"
                  >
                    <ShoppingBag size={13} />
                    Add to bag
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

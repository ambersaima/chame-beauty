
import { useRef } from "react";
import {
  FaStar,
  FaQuoteRight,
  FaCheckCircle,
} from "react-icons/fa";

const customers = [
  {
    name: "Aarushi Sharma",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    product: "Daily Glow Serum",
    review: "I'm genuinely obsessed with the products! My skin feels so soft and healthy. CHAMÉ has become a part of my everyday routine.",
  },
  {
    name: "Meera Kapoor",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    product: "Hydrating Face Cream",
    review: "The packaging, the quality, everything feels so premium. Finally found skincare that makes my skin feel loved!",
  },
  {
    name: "Sana Khan",
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    product: "Vitamin C Serum",
    review: "My skin looks brighter and feels more hydrated. I love how gentle the products are. Definitely worth trying!",
  },
  {
    name: "Riya Malhotra",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop",
    product: "Glow Essentials Kit",
    review: "A little self-care goes a long way, and CHAMÉ makes it special. The products are beautiful and work wonderfully.",
  },
  {
    name: "Ananya Verma",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    product: "Rose Glow Moisturizer",
    review: "I love the lightweight texture and the lovely fragrance. My new favourite beauty brand. Can't wait to try more!",
  },
  {
    name: "Ishita Mehta",
    location: "Jaipur, India",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=400&fit=crop",
    product: "Gentle Cleanser",
    review: "Everything feels thoughtfully made. My skincare routine feels like a little luxury moment every single day.",
  },
  {
    name: "Kiara Desai",
    location: "Ahmedabad, India",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    product: "Nourishing Face Oil",
    review: "CHAMÉ has made my skincare routine so enjoyable. The products feel luxurious and the overall experience is beautiful!",
  },
];

export default function CustomerStories() {
  const sliderRef = useRef(null);

  const scrollReviews = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector("[data-review-card]");
    const gap = 20;
    const distance = card ? card.offsetWidth + gap : 320;

    sliderRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="customer-stories"
      className="overflow-hidden bg-[#fff9f6] px-5 py-10 md:px-10 md:py-12"
    >
      <div className="container-wide">

        {/* Heading and Navigation */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#bd858b]">
              REAL STORIES, REAL GLOW
            </p>

            <h2 className="serif mt-2 text-3xl leading-tight tracking-[-.03em] text-[#302426] sm:text-4xl md:text-5xl">
              A little love from
              <span className="italic text-[#c98f96]">
                {" "}our community.
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-5 text-[#897778] sm:text-sm">
              Nothing makes us happier than being a little part of
              your everyday beauty rituals. Here's what our lovely
              community has to say.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollReviews(-1)}
              aria-label="Previous customer reviews"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#ead7d3] text-[#302426] transition-all duration-300 hover:border-[#c98f96] hover:bg-[#c98f96] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollReviews(1)}
              aria-label="Next customer reviews"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#ead7d3] text-[#302426] transition-all duration-300 hover:border-[#c98f96] hover:bg-[#c98f96] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Customer Review Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 sm:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {customers.map((customer) => (
            <article
              key={customer.name}
              data-review-card
              className="w-[85%] min-w-[85%] snap-start rounded-[24px] border border-[#f0e3df] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-10px)] sm:min-w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] lg:min-w-[calc(33.333%-14px)] sm:p-5"
            >
              {/* Stars and Quote */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1 text-[#d5a15e]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} size={11} />
                  ))}
                </div>

                <FaQuoteRight className="text-lg text-[#ead4d2]" />
              </div>

              {/* Review */}
              <p className="min-h-[90px] text-xs leading-[1.8] text-[#705f60] sm:text-[13px]">
                "{customer.review}"
              </p>

              {/* Product */}
              <div className="mt-3">
                <span className="inline-block rounded-full bg-[#fff3f0] px-3 py-1.5 text-[9px] tracking-wide text-[#b47c83]">
                  {customer.product}
                </span>
              </div>

              {/* Customer Profile */}
              <div className="mt-4 flex items-center gap-3 border-t border-[#f2e9e6] pt-3">
                <img
                  src={customer.image}
                  alt={customer.name}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full border-2 border-[#f4e3df] object-cover"
                />

                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-[#302426]">
                    {customer.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-[#a18d8d]">
                    {customer.location}
                  </p>
                </div>

                <div className="ml-auto flex shrink-0 items-center gap-1 text-[9px] text-[#9b777b]">
                  <FaCheckCircle className="text-[#c98f96]" />
                  Customer
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-5 text-center">
          <p className="serif text-lg italic text-[#a77c80] sm:text-xl">
            Made with love. Loved by you.
          </p>

          <p className="mt-1 text-[9px] tracking-[.2em] text-[#a18d8d]">
            THANK YOU FOR BEING PART OF CHAMÉ
          </p>
        </div>

      </div>
    </section>
  );
}

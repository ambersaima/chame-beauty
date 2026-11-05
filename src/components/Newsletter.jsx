
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="bg-blush py-14 md:py-20">
      <div className="container-wide mx-auto max-w-2xl text-center">
        <p className="eyebrow text-[#a66e76]">
          A note from us to you
        </p>

        <h2 className="serif mt-3 text-4xl md:text-5xl">
          Good things are blooming.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-[#806d6d]">
          Sign up for new launches, little beauty notes and 10% off your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="min-w-0 flex-1 border border-[#dfbfc0] bg-[#fffaf8] px-5 py-4 text-xs outline-none placeholder:text-[#a58c8c] focus:border-[#b97982]"
          />

          <button className="pill-button rounded-none sm:min-w-38.75">
            {submitted ? (
              <>
                <Check size={14} /> You're in!
              </>
            ) : (
              <>
                Count me in <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        {submitted && (
          <p role="status" className="mt-3 text-xs text-[#795b60]">
            Thank you! You're on the CHAMÉ list.
          </p>
        )}
      </div>
    </section>
  );
}

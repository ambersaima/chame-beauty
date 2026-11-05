
import { useState } from "react";

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlowSection from "./components/GlowSection";
import Categories from "./components/Categories";
import Products from "./components/Products";
import CustomerStories from "./components/CustomerStories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [bag, setBag] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [notice, setNotice] = useState("");

  const addToBag = (product) => {
    setBag((current) => [...current, product]);

    setNotice(`${product.name} added to your bag`);

    window.clearTimeout(window.__chameNoticeTimer);

    window.__chameNoticeTimer = window.setTimeout(() => {
      setNotice("");
    }, 2600);
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <AnnouncementBar />

      <Navbar
        bagCount={bag.length}
        wishlistCount={wishlist.length}
      />

      <main>
        <Hero />
        <GlowSection />
        <Categories />

        <Products
          onAdd={addToBag}
          wishlist={wishlist}
          onWishlist={toggleWishlist}
        />

        <CustomerStories />
        <Newsletter />
      </main>

      <Footer />

      {notice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-[#302426] px-5 py-3 text-center text-xs text-white shadow-xl"
        >
          {notice}
        </div>
      )}
    </>
  );
}

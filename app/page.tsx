"use client";
import { useState } from "react";
import Image from "next/image";
import {
  BadgePercent,
  CheckCircle,
  CircleUserRound,
  Compass,
  Heart,
  Search,
  Clipboard,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("Coupons");
  const handleAction = (text: string) => {
    setMessage(`${text} copied to clipboard!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const toggleSignIn = () => setSignedIn(!signedIn);
  return (
    <div className="min-h-screen bg-white max-w-sm mx-auto border rounded-lg relative">
      {/* Navbar */}
      <Navbar />
      {/* Offers */}
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2 text-[#4B4E4B]">Offers</h1>
        {!signedIn ? (
          <>
            <p className="text-sm text-[#4B4E4B] mb-2">
              Sign in to unlock exclusive additional rewards
            </p>
            <button
              onClick={toggleSignIn}
              className="bg-[#C16B3E] text-white w-full py-2 rounded-md mb-4"
            >
              Sign in
            </button>
          </>
        ) : (
          <p className="text-sm text-[#4B4E4B] mb-4">
            Book directly with us to get exclusive benefits
          </p>
        )}

        {/* Tabs */}
        <div className="flex justify-around text-sm border-b mb-4">
          {["Coupons", "Giftcards", "PaymentOffers"].map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              className={`py-2 px-3 font-medium ${
                activeTab === tab
                  ? "text-black border-b-2 border-[#b6602e]"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => {
                // handleAction(`${tab} clicked`);
                setActiveTab(tab);
              }}
            >
              {tab}
            </a>
          ))}
        </div>
        <div className="h-[60vh] no-scrollbar overflow-auto bg-[#ffffff]">
          {/* Section: Sitewide Coupons */}

          <section id="Coupons">
            <h2 className="font-semibold text-[#4B4E4B] mb-3">
              Sitewide coupons:
            </h2>

            {[
              {
                code: "LONGSTAY",
                price: "₹1,500",
                desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
              },
              {
                code: "EARLYBIRD",
                price: "₹1,200",
                desc: "Get 10% off when booking 15 days in advance and 15% off for 30+ days in advance.",
              },
              {
                code: "RUSHDEAL",
                price: "₹8000",
                desc: "Enjoy 10% off when you book last minute stays for 3+ nights.",
              },
            ].map((coupon, i) => (
              <div
                key={i}
                className="flex rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-[#fdf9f7] mb-4"
              >
                <div className="bg-[#b6602e] flex items-center justify-center px-3 py-4 relative">
                  <span className="text-white font-bold transform -rotate-90 text-lg whitespace-nowrap">
                    {coupon.price}
                  </span>
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 border-r-2 border-dashed border-white"></div>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {coupon.code}
                    </h3>
                    <button
                      onClick={() => handleAction(`${coupon.code} copied`)}
                      className="flex items-center gap-1 text-[#b6602e] text-sm font-medium"
                    >
                      <Clipboard size={16} />
                      Copy
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{coupon.desc}</p>
                  <hr className="border-gray-300 mb-2" />
                  <a className="text-gray-700 font-semibold text-sm cursor-pointer hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Section: Bonus Gift Cards */}
          <section className="mt-6" id="Giftcards">
            <h2 className="font-semibold text-[#4B4E4B] mb-3">
              Bonus gift cards:
            </h2>
            {!signedIn ? (
              <div className="border rounded-lg shadow-sm bg-[#fdf9f7] p-4 max-w-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#4B4E4B] font-medium text-sm">
                      Assured vouchers up to
                    </p>
                    <p className="text-[#4B4E4B] font-extrabold text-2xl flex items-center gap-1">
                      ₹1000 <span className="text-yellow-400 text-lg">✨</span>
                    </p>
                    <p className="text-[#4B4E4B] text-sm">of trending brands</p>
                  </div>

                  {/* Gift card visuals */}
                  <div className="relative shrink-0">
                    <div className="absolute top-3 right-2 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-md px-1 py-1 shadow-md">
                      <h2 className="text-xs font-normal">₹400 Gift card</h2>
                    </div>
                    <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold rounded-md px-3 py-2 shadow-md">
                      ₹500
                      <div className="text-xs font-normal">Gift card</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleAction("Claim Gift Cards")}
                  className="bg-[#b6602e] hover:bg-[#a45324] transition-colors duration-200 text-white w-full py-3 mt-4 rounded-md font-semibold text-lg"
                >
                  Claim gift cards »
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-[#7D7D7D]">Collect multiple of these</h2>
                {[
                  {
                    name: "MYNTRA",
                    value: "₹1500",
                    color: "bg-[#e10098]",
                    condition: "Get this gift voucher on booking above ₹2000",
                  },
                  {
                    name: "HAMMER",
                    value: "₹1000",
                    color: "bg-black",
                    condition: "Get this gift voucher on booking above ₹1500",
                  },
                ].map((g, i) => (
                  <div
                    key={i}
                    className="flex rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-[#fdf9f7] mb-4"
                  >
                    <div
                      className={`${g.color} flex items-center justify-center px-3 py-4 relative`}
                    >
                      <span className="text-white font-bold transform -rotate-90 text-lg whitespace-nowrap">
                        {g.value}
                      </span>
                      <div className="absolute right-0 top-0 bottom-0 w-1.5 border-r-2 border-dashed border-white"></div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800 text-base">
                            {g.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => handleAction(`${g.name} collected`)}
                          className="text-[#b6602e] text-sm font-semibold hover:underline"
                        >
                          Collect
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {g.condition}
                      </p>
                      <hr className="border-gray-300 mb-2" />
                      <a className="text-gray-700 font-semibold text-sm cursor-pointer hover:underline">
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>

          {/* Section: Payment Offers */}
          <section className="mt-6 mb-16 " id="PaymentOffers">
            <h2 className="font-semibold text-[#4B4E4B] mb-3">
              Payment offers:
            </h2>
            {!signedIn ? (
              <div className="border rounded-lg p-5 shadow-sm text-sm bg-[#FDF9F7]">
                <p className="text-[#4B4E4B]">Save more on your bookings</p>
                <p className="font-semibold text-[#b6602e]">
                  <span>upto 15% Off</span> <br />
                  on select payment methods
                </p>
                <button
                  onClick={() => handleAction("Unlock Offers")}
                  className="bg-[#b6602e] text-white w-full py-2 rounded-md mt-3"
                >
                  Unlock offers »
                </button>
              </div>
            ) : (
              <div className="flex rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-[#fdf9f7] max-w-md">
                <div className="bg-[#3168CF] flex items-center justify-center px-3 py-4 relative ">
                  <span className="text-white font-bold transform -rotate-90 text-lg whitespace-nowrap">
                    10% OFF
                  </span>
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 border-r-2 border-dashed border-white"></div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src="data:image/png;base64,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"
                      alt="HDFC BANK"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-sm object-contain"
                    />
                    <h3 className="font-bold text-gray-800 text-base">
                      HDFC BANK
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Get 10% off on booking above ₹1500
                  </p>
                  <hr className="border-gray-300 mb-2" />
                  <a className="text-gray-700 font-semibold text-sm cursor-pointer hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-[#FFFFFF] border-t flex justify-around py-2 text-xs">
        {[
          "Explore",
          "Offers",
          "Bookings",
          "Wishlist",
          signedIn ? "Profile" : "Sign In",
        ].map((tab) => (
          <button
            key={tab}
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            {tab === "Explore" ? (
              <Search color="#7D817D" />
            ) : tab === "Offers" ? (
              <BadgePercent color="#9a5632" />
            ) : tab === "Bookings" ? (
              <Compass color="#7D817D" />
            ) : tab === "Wishlist" ? (
              <Heart color="#7D817D" />
            ) : (
              <CircleUserRound color="#7D817D" />
            )}
            <span
              className={`mt-1 ${
                tab === "Offers"
                  ? "text-[#9a5632] font-extrabold "
                  : "text-[#7D817D]"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </nav>

      {/* Toast */}
      {message && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#9a5632] text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow">
          <CheckCircle size={18} /> {message}
        </div>
      )}
    </div>
  );
}

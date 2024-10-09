"use client";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

import { Allerta_Stencil } from "next/font/google";
import Link from "next/link";

const allerta_stencil = Allerta_Stencil({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="bg-primary-color text-text-color">
      <div>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4">
          <div className="flex h-10 w-full items-center justify-between gap-8">
            <div className={`${allerta_stencil.className} text-4xl lowercase`}>
              SAMEZONE
            </div>
            <div className="h-full flex-1">
              <form className="relative h-full px-2">
                <input className="h-full w-full rounded-lg border-2 border-solid border-middle-color bg-secondary-color px-2 font-semibold" />
                <IconContext.Provider
                  value={{ size: "1.5rem", color: "var(--middle-color)" }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("merhabas");
                    }}>
                    <FaSearch className="absolute right-5 top-[50%] translate-y-[-50%]" />
                  </button>
                </IconContext.Provider>
              </form>
            </div>
            <div className="flex gap-2 font-semibold">
              <IconContext.Provider value={{ size: "2rem" }}>
                <div>
                  <Link href="/login">
                    <div className="flex items-center gap-0.5">
                      <CiUser />
                      <p>Login</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    <CiHeart />
                    <p>Favorites</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    <CiShoppingCart />
                    <p>My Cart</p>
                  </div>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-16 rounded-xl bg-middle-color py-2 font-semibold">
            <Link
              className="font-bold text-primary-color"
              href="/category/electronics">
              Electronics
            </Link>
            <Link
              className="font-bold text-primary-color"
              href="/category/jewelery">
              Jewelery
            </Link>
            <Link
              className="font-bold text-primary-color"
              href="/category/men's clothing">
              Men&apos;s Clothing
            </Link>
            <Link
              className="font-bold text-primary-color"
              href="/category/women's clothing">
              Women&apos;s Clothing
            </Link>
          </div>
          <div className="mt-4 flex justify-center gap-4 rounded-lg border-2 border-black bg-secondary-color py-4 font-semibold">
            <p className="relative">
              Mother & Child
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Home & Living
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Supermarket
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Cosmetics
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Pet Supplies
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Smart Home
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Shoes & Bags
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Sports & Outdoor
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
            <p className="relative">
              Best Sellers
              <span className="absolute left-[-15px] top-[-5px] inline-block -rotate-45 rounded-3xl border-2 border-red-700 px-1 text-center text-xs font-bold leading-tight text-red-700 opacity-80">
                Coming <br /> Soon
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

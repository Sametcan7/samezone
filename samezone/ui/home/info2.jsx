"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Info2() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-8">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Beachwear
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Kids' Shoes
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Women's Clothes
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Men's Shoes
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Women's Shoes
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Smart Home
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Men's Underwear & Sleepwear
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Electronics
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Women's Clothing
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Kids' Fashion
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Sports & Outdoors
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Bags & Luggage
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Sports & Outdoors
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Baby & Maternity
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Musical Instruments
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Jewelry & Accessories
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Pet Supplies
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Women's Curve
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Toys & Games
        </span>
        <span className="mx-4 flex cursor-pointer items-center rounded-xl border-2 border-black bg-zinc-200 px-2 py-2 font-bold">
          Tools & Home Improvement
        </span>
      </Carousel>
    </div>
  );
}

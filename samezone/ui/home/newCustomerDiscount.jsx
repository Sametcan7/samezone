"use client";

import { IconContext } from "react-icons";
import { useRef, useEffect, useState } from "react";
import { PiArrowBendLeftDownBold } from "react-icons/pi";
import { ArrowIconsLeft, ArrowIconsRight } from "../../lib/icons/arrowIcons";

export default function NewCustomerDiscount() {
  const [data, setData] = useState(null);
  const divRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleL = () => {
    if (divRef.current) {
      divRef.current.scrollLeft -= imgRef.current.clientWidth;
    }
  };
  const handleR = () => {
    if (divRef.current) {
      divRef.current.scrollLeft += imgRef.current.clientWidth;
    }
  };

  return (
    <div className="mt-10 flex w-full rounded-lg bg-primary-color text-text-color">
      <div className="flex w-[30%] flex-col justify-between p-6">
        <div>
          <p className="text-2xl">New shopper exclusive</p>
          <p className="text-xl">First order only</p>
        </div>
        <div className="rounded-lg bg-zinc-600 p-2">
          <p className="text-3xl">Up to 70% off</p>
          <p className="text-2xl">Welcome deal</p>
        </div>
      </div>
      <div className="relative w-[70%]">
        <button
          onClick={() => handleL()}
          className="absolute left-[-30px] top-1/2 translate-y-[-50%] rounded-full bg-gray-300 bg-opacity-10 hover:bg-opacity-50">
          <ArrowIconsLeft size={"4rem"} color={"white"} />
        </button>
        <div ref={divRef} className="flex overflow-x-hidden py-2">
          {data?.map((data) => (
            <div key={data.id} ref={imgRef} className="w-[25%] shrink-0">
              <div className="mx-2">
                <div className="rounded-lg bg-slate-100 p-2">
                  <div>
                    <img
                      className="aspect-square rounded-lg pb-2"
                      src={data.image}
                      width={"100%"}
                    />
                  </div>
                  <div className="inline-block rounded-2xl bg-middle-color border-2 border-black px-1 py-2">
                    <p className="flex flex-row items-center">
                      <IconContext.Provider
                        value={{ color: "var(--text-color)", size: "1.5rem" }}>
                        <PiArrowBendLeftDownBold />
                      </IconContext.Provider>
                      <span className="text-xl font-bold">-%70</span>
                    </p>
                  </div>
                  <div>
                    <span className="pr-1 text-xl font-bold text-black">
                      {Number((data.price * 70) / 100).toFixed(2)}$
                    </span>
                    <span className="text-lg font-semibold text-stone-300 line-through">
                      {data.price}$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleR()}
          className="absolute right-[-30px] top-1/2 translate-y-[-50%] rounded-full bg-gray-300 bg-opacity-10 hover:bg-opacity-50">
          <ArrowIconsRight size={"4rem"} color={"white"} />
        </button>
      </div>
    </div>
  );
}

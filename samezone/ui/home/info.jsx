"use client";

import { IconContext } from "react-icons";
import { FaTruckArrowRight } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";

export default function Info() {
  return (
    <div>
      <div className="mt-10 flex justify-center rounded-lg bg-text-color py-2 text-xl font-semibold text-secondary-color">
        <IconContext.Provider
          value={{ size: "2rem", color: "var(--secondary-color)" }}>
          <div className="flex items-center gap-2 px-2">
            <FaTruckArrowRight />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 px-2">
            <TbTruckReturn />
            <span>Free Returns</span>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

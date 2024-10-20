import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

export default function CategoryLists({ category }) {
  return (
    <>
      {category === "electronics" && <Electronics />}
      {category === "jewelery" && <Jewelry />}
      {category === "men's clothing" && <Men />}
      {category === "women's clothing" && <Women />}
    </>
  );
}

function Electronics() {
  const [computer, setComputer] = useState(false);
  const [printer, setPrinter] = useState(false);
  const [data, setData] = useState(false);
  const [component, setComponent] = useState(false);
  const [pripherals, setPripherals] = useState(false);

  return (
    <div className="border-b-2 border-black py-3">
      <div className="pb-1 pl-2 text-xl font-bold text-text-color">
        Electronics
      </div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Computers
        <button className="mx-2" onClick={() => setComputer((state) => !state)}>
          {computer ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Desktop Computer
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Laptop Computer
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Monitor PC (All-in-One)
      </div>
      <div
        className={`${computer ? "block" : "hidden"} w-full overflow-clip break-words px-4 pl-4`}>
        Mini Desktop
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>Servers</div>

      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Printer
        <button className="mx-2" onClick={() => setPrinter((state) => !state)}>
          {printer ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Laser Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Inkjet Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Tank Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Dot Matrix Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>Scanners</div>

      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Data Storage
        <button className="mx-2" onClick={() => setData((state) => !state)}>
          {data ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className={`${data ? "block" : "hidden"} pl-4`}>USB Memory</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>Portable Disk</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>Portable SSD</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>MemoryCards</div>

      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Computer Components
        <button
          className="mx-2"
          onClick={() => setComponent((state) => !state)}>
          {component ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className={`${component ? "block" : "hidden"} pl-4`}>
        Motherboards
      </div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>
        Graphics Cards
      </div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Memory</div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Processors</div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Hard Disks</div>

      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Pripherals
        <button
          className="mx-2"
          onClick={() => setPripherals((state) => !state)}>
          {pripherals ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Monitors</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Mouse</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Keyboard</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>
        Power Supplies
      </div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>
        Electronic Dictionaries
      </div>
    </div>
  );
}

function Jewelry() {
  const [jewelry, setJewelry] = useState(false);

  return (
    <div className="border-b-2 border-black py-3">
      <div className="pb-1 pl-2 text-xl font-bold text-text-color">
        Gold / Jewelry / Jewellery
      </div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Jewelry & Jewellery
        <button className="mx-2" onClick={() => setJewelry((state) => !state)}>
          {jewelry ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${jewelry ? "block" : "hidden"} pl-4`}>Women</div>
      <div className={`${jewelry ? "block" : "hidden"} pl-4`}>Men</div>
    </div>
  );
}

function Men() {
  const [clothes, setClothes] = useState(false);
  const [shoes, setShoes] = useState(false);

  return (
    <div className="border-b-2 border-black py-3">
      <div className="pb-1 pl-2 text-xl font-bold text-text-color">Men</div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Clothes
        <button className="mx-2" onClick={() => setClothes((state) => !state)}>
          {clothes ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${clothes ? "block" : "hidden"} pl-4`}>Trousers</div>
      <div className={`${clothes ? "block" : "hidden"} pl-4`}>Shirt</div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Men Shoes
        <button className="mx-2" onClick={() => setShoes((state) => !state)}>
          {shoes ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${shoes ? "block" : "hidden"} pl-4`}>Boots</div>
      <div className={`${shoes ? "block" : "hidden"} pl-4`}>Sneakers</div>
    </div>
  );
}
function Women() {
  const [clothes, setClothes] = useState(false);
  const [shoes, setShoes] = useState(false);

  return (
    <div className="border-b-2 border-black py-3">
      <div className="pb-1 pl-2 text-xl font-bold text-text-color">Women</div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Clothes
        <button className="mx-2" onClick={() => setClothes((state) => !state)}>
          {clothes ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${clothes ? "block" : "hidden"} pl-4`}>Trousers</div>
      <div className={`${clothes ? "block" : "hidden"} pl-4`}>Shirt</div>
      <div className="flex items-center justify-between pl-2 font-semibold text-text-color">
        Women Shoes
        <button className="mx-2" onClick={() => setShoes((state) => !state)}>
          {shoes ? <IoIosArrowBack /> : <IoIosArrowDown />}
        </button>
      </div>
      <div className={`${shoes ? "block" : "hidden"} pl-4`}>Boots</div>
      <div className={`${shoes ? "block" : "hidden"} pl-4`}>Sneakers</div>
    </div>
  );
}

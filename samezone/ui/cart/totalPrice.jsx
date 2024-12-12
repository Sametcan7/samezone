export default function TotalPrice({ productList }) {
  const totalPrice = productList
    .reduce((ac, cur) => {
      const itemTotal = cur.price * cur.quantity;
      return ac + itemTotal;
    }, 0)
    .toFixed(2);

  return (
    <div className="my-2 h-max w-full lg:w-[250px] rounded-lg border-2 border-black bg-primary-color p-4 text-text-color">
      <p className="mb-4 border-b-2 border-middle-color text-lg font-semibold">
        SELECTED PRODUCTS
      </p>
      <p className="text-2xl font-bold">Total: {totalPrice} $</p>

      <button className="mt-4 w-full rounded-lg border-2 border-black bg-middle-color p-1 text-2xl font-bold">
        Confirm
      </button>
    </div>
  );
}

import Info from "../ui/home/info";
import Info2 from "../ui/home/info2";
import NewCustomerDiscount from "../ui/home/newCustomerDiscount";
import Products from "../ui/home/products";

export default function Home() {
  return (
    <div>
      <Info />
      <NewCustomerDiscount />
      <Info2 />
      <Products />
    </div>
  );
}

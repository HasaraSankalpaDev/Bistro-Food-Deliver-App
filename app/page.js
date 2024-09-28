import FoodMenu from "@/Components/Client/FoodMenu";
import Header from "@/Components/Client/Header";
import Nav from "@/Components/Client/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FoodMenu />
    </div>
  );
}

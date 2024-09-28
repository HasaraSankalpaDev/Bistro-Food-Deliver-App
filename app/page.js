import ContactUs from "@/Components/Client/ContactUs";
import FoodMenu from "@/Components/Client/FoodMenu";
import Header from "@/Components/Client/Header";
import Nav from "@/Components/Client/Nav";
import Services from "@/Components/Client/Services";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FoodMenu />
      <Services />
      <ContactUs />
    </div>
  );
}

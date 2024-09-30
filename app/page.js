import ContactUs from "../Components/Client/ContactUs";
import FoodMenu from "../Components/Client/FoodMenu";
import Footer from "../Components/Client/Footer";
import Header from "../Components/Client/Header";
import Nav from "../Components/Client/Nav";
import Services from "../Components/Client/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FoodMenu />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

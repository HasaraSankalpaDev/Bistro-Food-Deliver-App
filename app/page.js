"use client";
import ContactUs from "../Components/Client/ContactUs";
import FoodMenu from "../Components/Client/FoodMenu";
import Footer from "../Components/Client/Footer";
import Header from "../Components/Client/Header";
import Nav from "../Components/Client/Nav";
import Services from "../Components/Client/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurTeam from "../Components/Client/OurTeam";
import { CartProvider } from "../Lib/Context/CartContext";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FoodMenu />
      <Services />
      <OurTeam />
      <ContactUs />
      <Footer />
      <ToastContainer theme="dark" position="top-right" />
    </div>
  );
}

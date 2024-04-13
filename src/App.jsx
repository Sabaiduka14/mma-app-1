import Footer from "./components/Footer";
import Gear from "./components/Gear";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <Navbar />
      <Home />
      <Pricing />
      <Products />
      <Gear />
      <Testimonials />
      <Shop />
      <Team />
      <Footer />
    </main>
  );
}

import logo from "@/assets/mma-logo.png";
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <header className="w-full md:px-4 py-2">
      <div className="flex gap-6 md:gap-0 justify-between items-center">
        <div className="flex gap-8">
          <img src={logo} className="md:w-24 w-16 h-16 md:h-24 object-cover" />
          <nav className="hidden lg:flex gap-4 font-semibold items-center">
            <p className="cursor-pointer">Shop Now</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">More</p>
          </nav>
        </div>
        <div className="flex gap-4">
          <Button className="w-20">Sign Up</Button>
          <Button className="w-24" variant="outline">Learn More</Button>
        </div>
      </div>
    </header>
  );
}

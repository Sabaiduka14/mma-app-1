import { Copyright } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import logo from "@/assets/mma-logo.png";

export default function Footer() {
  return (
    <main className="w-full h-screen mt-32">
      <div className="w-full h-[30%] grid grid-cols-1 md:grid-cols-2 md:justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Get Exclusive Offers</h1>
          <p className="text-lg font-semibold">Subscribe To Our Newsletter</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Input className="w-52" type="email" placeholder="Your Email" />
            <Button className="md:w-64 w-24">Join</Button>
          </div>
          <p className="font-semibold text-xs md:text-sm">
            By subscribing you agree on our Privacy Policy
          </p>
        </div>
        <div className="lg:w-[1250px] w-[340px] rounded-lg h-0.5 bg-black" />
      </div>
      <div className="w-full h-[60%] mt-24">
        <div className="">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full h-full">
              <h1 className="text-2xl font-bold mb-3">About Us</h1>
              <p className="text-lg font-semibold mb-1">Contact</p>
              <p className="text-lg font-semibold mb-1">FAQs</p>
              <p className="text-lg font-semibold mb-1">Shipping</p>
              <p className="text-lg font-semibold mb-1">Returns</p>
              <p className="text-lg font-semibold mb-1">Terms</p>
            </div>
            <div className="w-full h-full">
              <h1 className="text-2xl font-bold mb-3">Privacy</h1>
              <p className="text-lg font-semibold mb-1">Size Guide</p>
              <p className="text-lg font-semibold mb-1">Track Order</p>
              <p className="text-lg font-semibold mb-1">Gift Cards</p>
              <p className="text-lg font-semibold mb-1">Affiliate</p>
              <p className="text-lg font-semibold mb-1">Blog</p>
            </div>
            <div className="w-full h-full">
              <h1 className="text-2xl font-bold mb-3">Press</h1>
              <p className="text-lg font-semibold mb-1">Instagram</p>
              <p className="text-lg font-semibold mb-1">Facebook</p>
              <p className="text-lg font-semibold mb-1">Twitter</p>
              <p className="text-lg font-semibold mb-1">Youtube</p>
              <p className="text-lg font-semibold mb-1">Linkedin</p>
            </div>
            <div className="w-full h-full">
              <h1 className="text-2xl font-bold mb-3">Column 4</h1>
              <p className="text-lg font-semibold mb-1">Link 1</p>
              <p className="text-lg font-semibold mb-1">Link 2</p>
              <p className="text-lg font-semibold mb-1">Link 3</p>
              <p className="text-lg font-semibold mb-1">Link 4</p>
              <p className="text-lg font-semibold mb-1">Link 5</p>
            </div>
          </div>
          <div className="lg:w-[1250px] w-[340px] mt-24 rounded-lg h-0.5 bg-black" />
        </div>
      </div>
      <div className="lg:-mt-32 mt-[570px] flex justify-between items-center">
        <div>
          <img src={logo} className="w-20 h-20 object-cover" />
        </div>
        <div>
          <p className="flex text-xs lg:text-md md:text-sm font-bold gap-1">
            <Copyright />
            2024 Saba.idukashvili. All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
}

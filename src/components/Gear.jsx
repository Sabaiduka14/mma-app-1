import { Box } from "lucide-react";
import { Button } from "./ui/button";

export default function Gear() {
  return (
    <main className="w-full h-[1200px] md:h-[1600px] lg:h-screen mt-12 md:-mt-56 lg:mt-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p className="font-semibold">Shop</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
            Find The Best MMA Gear Online
          </h1>
          <p className="my-2 font-semibold">
            Experience the highest quality MMA gear, exceptional customer
            satisfaction, and exclusive loyalty rewards when you shop with us.
          </p>
          <div className="gap-4 my-12">
            <div>
              <div className="w-full mb-6">
                <Box size={50} />
                <h1 className="text-2xl my-3 font-bold">Quality</h1>
                <p className="font-semibold">
                  Discover top-notch MMA gear that meets your training needs and
                  exceeds your expectations.
                </p>
              </div>
            </div>
            <div>
              <div className="w-full">
                <Box size={50} />
                <h1 className="text-2xl my-3 font-bold">Satisfaction</h1>
                <p className="font-semibold">
                  We prioritize your satisfaction and strive to provide
                  exceptional customer service at every step.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button>Learn More</Button>
            <p className="font-semibold">Sign Up {">"}</p>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src="https://m.media-amazon.com/images/I/81Yeo2usyIL._AC_UF894,1000_QL80_.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

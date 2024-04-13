import { Button } from "./ui/button";

export default function Shop() {
  return (
    <main className="w-full h-[300px] md:h-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-full">
          <h1 className="font-bold text-3xl md:text-4xl mb-2">Show The Latest MMA Gear</h1>
          <p className="font-semibold text-lg">Discover the Best MMA Gear and Accessories Online</p>
        </div>
        <div className="w-full h-full flex gap-8 items-center">
          <Button className="w-full">Shop</Button>
          <Button className="w-full" variant="outline">Sign Up</Button>
        </div>
      </div>
    </main>
  );
}

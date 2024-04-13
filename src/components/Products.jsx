/* eslint-disable react/no-unescaped-entities */
export default function Products() {
  return (
    <main className="w-full h-[1900px] lg:h-screen mt-16">
      <div className="lg:flex gap-12 w-full h-[16%] lg:h-[40%] items-center">
        <div className="flex flex-col mb-4">
          <p className="font-semibold my-2">Discover</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Unleash Your Inner Fighter with Our Exclusive MMA Gear
          </h1>
        </div>
        <div className="w-full flex">
          <p className="font-semibold">
            At our ecommerce website, we offer a wide range of exclusive MMA
            products, custom gym gear, and member discounts. Whether you're a
            professional fighter or a fitness enthusiast, we have everything you
            need to elevate your training and showcase your passion for MMA.
          </p>
        </div>
      </div>
      <div className="w-full h-[60%] mt-16">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="my-4">
            <img
              src="https://miro.medium.com/v2/resize:fit:1024/1*AzQjsLpavIFFMOfR6oGl4A.jpeg"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h1 className="text-3xl my-3 font-bold">Exclusive MMA Products</h1>
            <p className="font-semibold text-sm">
              Browse through our collection of high-quality MMA gear, including
              gloves, shorts, and training equipment.
            </p>
          </div>
          <div className="my-4">
            <img
              src="https://sonic.ge/dyn/gENw7YdV-GCXLNfK0cYnm34K3IRNGc1KTZEQ32nm0HA/rs:fit:720:0/plain/images/products/original/cbd07755-b42d-4c85-8ba9-1bf1ff774108.jpg"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h1 className="text-3xl my-3 font-bold">Exclusive MMA Products</h1>
            <p className="font-semibold text-sm">
              Browse through our collection of high-quality MMA gear, including
              gloves, shorts, and training equipment.
            </p>
          </div>
          <div className="my-4">
            <img
              src="https://img.freepik.com/free-vector/gradient-discount-numbers-set_23-2149577274.jpg"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h1 className="text-3xl my-3 font-bold">Exclusive MMA Products</h1>
            <p className="font-semibold text-sm">
              Browse through our collection of high-quality MMA gear, including
              gloves, shorts, and training equipment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

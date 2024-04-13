import { Button } from "./ui/button";

export default function Home() {
  return (
    <main className="w-full h-[1400px] md:h-[2000px] lg:h-[1200px] mt-16 md:mt-32 px-3">
      <div className="flex flex-col w-full h-[20%] lg:h-[30%] items-center">
        <h1 className="md:max-w-3xl text-center text-2xl md:text-5xl font-bold mb-4">
          Discover The Best MMA and Gym Gear
        </h1>
        <p className="md:max-w-3xl text-center mb-4 font-semibold text-md md:text-lg">
          Get ready to take your training to the next level with our wide range
          of high-quality MMA and gym products.
        </p>
        <div className="flex gap-3">
          <Button>Shop</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="w-full h-screen lg:mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg"
          src="https://media.istockphoto.com/id/917726954/photo/mma-fighters-in-professional-boxing-ring.jpg?s=612x612&w=0&k=20&c=SdPksYEEimCiCznfh493mDEpQ7wkgMQU4r-gHIgIZ1k="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg"
          src="https://media.istockphoto.com/id/915307546/photo/professional-female-mixed-martial-arts-fighters-fighting-in-octagon.jpg?s=612x612&w=0&k=20&c=V8J345dvaYZnwr0L8lErc_dzHqrGHCNVDctX1VrUzoQ="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg"
          src="https://media.istockphoto.com/id/502096902/photo/mma-fighter-on-a-smokey-background.jpg?s=612x612&w=0&k=20&c=vG4ziCyWXP3VivL92YPeG3YrhhMXGw0mJEbtQ9x7vg0="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg"
          src="https://media.istockphoto.com/id/1177188061/photo/conflict-concept.jpg?s=612x612&w=0&k=20&c=bPH9lgf9OSJnsg8wzDw7ZnfwMo9sKrDGq_QybxZn5O4="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg lg:-mt-24"
          src="https://media.istockphoto.com/id/1252207646/photo/man-kick-boxer-training-alone-in-gym.jpg?s=612x612&w=0&k=20&c=Odxuklcmny-JxdxpAcvgV8R63yM5vSmZf7Ra0kokcHA="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg lg:-mt-24"
          src="https://media.istockphoto.com/id/1329587619/photo/cage-two-fighters-are-fighting-punches-sport-action-concept-emotions-of-winner-octagon-3d.jpg?s=612x612&w=0&k=20&c=nd6rvlWdQrAhoGZwHU2U7dahfH_Z3HgSgt9jabC6dkQ="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg lg:-mt-24"
          src="https://media.istockphoto.com/id/1132339806/photo/powerful-caucasian-boxer-girl-in-sportswear-with-bandage-on-feet-and-boxing-gloves-on-hands.jpg?s=612x612&w=0&k=20&c=7pNmoETS3_jrtBBMYe_L_w_QASWZsrtsrug0w_lF6QU="
          alt=""
        />
        <img
          className="w-[400px] md:h-[300px] h-[250px] object-cover rounded-lg lg:-mt-24"
          src="https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
          alt=""
        />
      </div>
    </main>
  );
}

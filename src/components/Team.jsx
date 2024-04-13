import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Team() {
  return (
    <main className="w-full h-[2400px] lg:h-screen">
      <div className="w-full h-full flex flex-col">
        <div>
          <p className="font-semibold">Empower</p>
          <h1 className="font-bold text-3xl my-4">Meet Our Team</h1>
          <p className="font-semibold">
            Get To Know The Experts Behind Our Ecommerce Platform
          </p>
        </div>
        <div className="mt-16 gap-6 w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="flex md:flex-row flex-col gap-8">
            <div>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTMzNDA0NTk1NV5BMl5BanBnXkFtZTYwNzY3MDE0._V1_FMjpg_UX1000_.jpg"
                className="w-[340px] md:w-[350px] rounded-lg h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Joe Rogan</p>
              <p className="font-semibold">MMA Specialist</p>
              <p className="mt-8 font-semibold mb-10">
                Joe is a professional MMA fighter with over 10 years of
                experience.
              </p>
              <p className="flex gap-3">
                <Linkedin />
                <Facebook />
                <Instagram />
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <div>
              <img
                src="https://www.julienutrition.com/wp-content/uploads/2023/02/Personal-Trainer-Strength-Conditioning-and-Fitness-Coach-JM-Nutrition.jpg"
                className="w-[340px] md:w-[430px] rounded-lg h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Jane Smith</p>
              <p className="font-semibold">Fitness Trainer</p>
              <p className="mt-8 font-semibold mb-10">
                Jane is a certified fitness trainer who specializes in strength
                and conditioning.
              </p>
              <p className="flex gap-3">
                <Linkedin />
                <Facebook />
                <Instagram />
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <div>
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/2/GettyImages-1214221095.jpg.rend.hgtvcom.616.411.suffix/1612301517364.jpeg"
                className="w-[340px] md:w-[500px] rounded-lg h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Maya Johnson</p>
              <p className="font-semibold">Nutitionist</p>
              <p className="mt-8 font-semibold mb-10">
                Maya is a registered dietitian who helps athletes optimize their
                nutrition for peak performance.
              </p>
              <p className="flex gap-3">
                <Linkedin />
                <Facebook />
                <Instagram />
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <div>
              <img
                src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2023/02/Role-of-Physical-Therapist-Hero.jpg"
                className="w-[340px] md:w-[430px] rounded-lg h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">Sara Thompson</p>
              <p className="font-semibold">Physical Therapist</p>
              <p className="mt-8 font-semibold mb-10">
                Sarah is a licensed physical therapist who specializes in sports
                rehabilitation.
              </p>
              <p className="flex gap-3">
                <Linkedin />
                <Facebook />
                <Instagram />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

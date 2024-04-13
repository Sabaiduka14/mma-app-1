import { Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
  return (
    <main className="w-full h-[30%] px-4">
      <div className="flex flex-col items-center">
        <p className="font-semibold">Unleash</p>
        <h1 className="text-3xl font-bold my-4 md:text-4xl lg:text-5xl">
          Pricing Options
        </h1>
        <p className="font-semibold my-4">
          Choose the plan that suits your needs and budget.
        </p>
        <div className="flex gap-1 mt-6">
          <Button>Monthly</Button>
          <Button variant="outline">Yearly</Button>
        </div>
      </div>
      <div className="w-full h-[70%] mt-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card className="px-4 w-full h-full">
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <CardDescription>
                <p className="mb-6">Access to basic features and content</p>
              </CardDescription>
              <div className="bg-black w-full h-0.5 rounded-lg"></div>
            </CardHeader>
            <CardContent>
              <p className="text-5xl md:text-6xl my-4 font-bold">$19/mo</p>
              <Button className="w-full mt-4 mb-6">Get Started</Button>
              <div className="bg-black w-full h-0.5 rounded-lg"></div>
            </CardContent>
            <CardFooter>
              <ul className="mt-4 font-semibold">
                <li className="flex gap-3 items-center mb-4">
                  <Check /> Customizable training programs
                </li>
                <li className="flex gap-3 items-center mb-4">
                  <Check /> Exclusive product discount
                </li>
                <li className="flex gap-3 items-center mb-4 md:mb-24">
                  <Check /> 24/7 customer support
                </li>
              </ul>
            </CardFooter>
          </Card>
          <Card className="px-4 w-full h-full">
            <CardHeader>
              <CardTitle>Business Plan</CardTitle>
              <CardDescription>
                <p className="mb-6">Access to premium features and content</p>
              </CardDescription>
              <div className="bg-black w-full h-0.5 rounded-lg"></div>
            </CardHeader>
            <CardContent>
              <p className="text-5xl md:text-6xl my-4 font-bold">$29/mo</p>
              <Button className="w-full mt-4 mb-6">Get Started</Button>
              <div className="bg-black w-full h-0.5 rounded-lg"></div>
            </CardContent>
            <CardFooter>
              <ul className="mt-4 font-semibold">
                <li className="flex gap-3 items-center mb-4">
                  <Check /> Personalized training programs
                </li>
                <li className="flex gap-3 items-center mb-4">
                  <Check /> Exclusive product discount
                </li>
                <li className="flex gap-3 items-center mb-4">
                  <Check /> 24/7 priority customer support
                </li>
                <li className="flex gap-3 items-center mb-4">
                  <Check /> Access to premium events
                </li>
                <li className="flex gap-3 items-center mb-4 md:mb-16">
                  <Check /> Early access to new products
                </li>
              </ul>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
